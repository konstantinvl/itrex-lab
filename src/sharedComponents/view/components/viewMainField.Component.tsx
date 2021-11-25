import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { useAppSelector } from '../../../services/store/hooks';
import { Appointment } from '../../../services/interfaces';
import ViewCard from './viewCard.Component';
import ViewMainFieldControl from './viewMainFieldControls.Component';
import CreateAppointmentButton from './createAppointmentButton';

const ViewMainFieldInfo = styled.div`
    padding: 0px 32px 0px 28px;
    margin-top: 8px;
    width: 100%;
    flex: 1;
    min-height: calc(100% - 40px);
    max-height: calc(100% - 40px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    overflow: auto;
    background-repeat: no-repeat;
    background-position: center;

    &::-webkit-scrollbar {
        margin-top: 24px;
        width: 12px;
        background: ${rgba('#dce0ec', 0.32)};

        border-radius: 8px;
        max-height: 97%;
    }
    /* &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    } */
    &::-webkit-scrollbar-thumb {
        background: ${rgba('#dce0ec', 0.56)};

        border-radius: 8px;
    }
    @media screen and (min-width: 561px) and (max-width: 1067px) {
        margin-top: 18px;
        padding-right: 20px;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        padding: 0px 18px 0px 24px;
        margin-top: 0px;
        min-height: calc(100% - 40px);
        max-height: calc(100% - 40px);
    }
`;

function ViewMainField(props: { data: Appointment[]; title: string }): JSX.Element {
    const { user } = useAppSelector((state) => state);
    const { title, data } = props;
    return (
        <>
            <ViewMainFieldControl title={`My ${title}`}>
                <CreateAppointmentButton />
            </ViewMainFieldControl>
            <ViewMainFieldInfo>
                {data?.map((info) => {
                    return <ViewCard info={info} status={user.role_name} key={info.id} />;
                })}
            </ViewMainFieldInfo>
        </>
    );
}

export default ViewMainField;