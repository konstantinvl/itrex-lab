import ResolutionCreatePopup from 'components/resolutionCreatePopup';
import React, { useState } from 'react';
import { rgba } from 'polished';

import { appointmentCheck, indicatorColor } from 'services/utilities';
import styled from 'styled-components';
import ResolutionEditPopup from 'components/resolutionEditPopup';
import Indicator from '../../../../components/roundIndicator';
import { Appointment } from '../../../../services/interfaces';
import CardMenuButton from './cardMenuButton';

const Card = styled.div`
    width: 406px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 24px 0px 40px;

    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 12px;
    color: black;
    margin-top: 24px;
    margin-left: 20px;
    @media screen and (min-width: 561px) and (max-width: 1067px) {
        width: unset;
        flex: 1;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: unset;
        flex: 1;
        margin-top: 16px;
        margin-left: 0;
        height: 305px;
        padding: 24px 0px 24px;
    }
`;

const Overall = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 72px;
    border-bottom: solid 1px ${rgba('#dce0ec', 0.5)};
    padding-bottom: 24px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        padding-bottom: 0;
    }
`;

const Details = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    padding: 0px 32px;
    & span {
        min-height: 24px;
        padding-left: 40px;
        font-size: 15px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #202225;
        background-position: 2px 2px;
        background-repeat: no-repeat;
        & ~ span {
            margin-top: 16px;
        }
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        padding: 0px 16px;
        & span {
            & ~ span {
                margin-top: 23px;
            }
        }
    }
`;

const OverallInfoWrapper = styled.div`
    display: flex;
`;
const OverallPhoto = styled.img`
    height: 48px;
    width: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    margin-left: 32px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 24px;
    }
`;
const OverallInfo = styled.div`
    height: 48px;
    width: 229px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: unset;
    }
`;
const OverallInfoName = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
    color: #202225;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: -3px;
    }
`;
const OverallInfoAppointment = styled.div`
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: #a1abc9;
    & div {
        margin-right: 8px;
        border: 0;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: 3px;

        &#text {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        & div {
            margin-top: 4px;
            min-width: 8px;
            margin-right: 8px;
        }
    }
`;
const OverallMenu = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        min-width: 54px;
        max-width: 54px;
        height: 48px;
    }
`;

const DetailsDate = styled.span`
    height: 24px;
    font-weight: 600;
    line-height: 130%;
`;

function DoctorViewCard(props: { info: Appointment }): JSX.Element {
    const { info } = props;

    const [showCreateResolution, setShowCreateResolution] = useState<boolean>(false);
    const [showEditResolution, setShowEditResolution] = useState<boolean>(false);
    const menuButtons: {
        text: string;
        closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
    }[] = [
        { text: 'Create a resoluton', closeFunc: setShowCreateResolution },
        { text: 'Edit a resoluton', closeFunc: setShowEditResolution },
        { text: 'Delete', closeFunc: setShowCreateResolution },
    ];

    return (
        <>
            <Card>
                <Overall>
                    <OverallInfoWrapper>
                        <OverallPhoto src={info.patient?.photo} alt="Avatar" />
                        <OverallInfo>
                            <OverallInfoName data-testid="name">{`${info.patient?.first_name} ${info.patient?.last_name}`}</OverallInfoName>
                            <OverallInfoAppointment>
                                <Indicator color={indicatorColor(info.status)} />
                                {appointmentCheck(info.status)}
                            </OverallInfoAppointment>
                        </OverallInfo>
                    </OverallInfoWrapper>
                    <OverallMenu>
                        <CardMenuButton menuButtons={menuButtons} />
                    </OverallMenu>
                </Overall>
                <Details>
                    <DetailsDate
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/clock-three.png)`,
                        }}
                    >
                        {new Date(info.visit_date).toLocaleDateString('En-en', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            hour12: true,
                        })}
                    </DetailsDate>
                    <span
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/clipboard-blank.png)`,
                        }}
                    >
                        {info.note}
                    </span>
                </Details>
            </Card>
            {showCreateResolution && (
                <ResolutionCreatePopup
                    firstName={info.patient?.first_name}
                    lastName={info.patient?.last_name}
                    appointmentID={info.id}
                    closeFunc={setShowCreateResolution}
                />
            )}
            {showEditResolution && (
                <ResolutionEditPopup
                    firstName={info.patient?.first_name}
                    lastName={info.patient?.last_name}
                    appointmentID={info.id}
                    closeFunc={setShowEditResolution}
                />
            )}
        </>
    );
}
export default DoctorViewCard;
