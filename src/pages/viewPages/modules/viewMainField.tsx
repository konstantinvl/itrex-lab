import React from 'react';
import { Appointment } from '../../../services/interfaces';
import { useAppSelector } from '../../../services/store/hooks';
import CreateAppointmentButton from './components/createAppointmentButton';
import StyledViewMainFieldInfo from './components/styles/viewMainFieldInfo';
import ViewCard from './components/viewCard';
import ViewMainFieldControl from './components/viewMainFieldControls';

function ViewMainField(props: { data: Appointment[]; title: string }): JSX.Element {
    const { user } = useAppSelector((state) => state);
    const { title, data } = props;
    return (
        <>
            <ViewMainFieldControl title={`My ${title}`}>
                <CreateAppointmentButton />
            </ViewMainFieldControl>
            <StyledViewMainFieldInfo>
                {data?.map((info) => {
                    return <ViewCard info={info} status={user.role_name} key={info.id} />;
                })}
            </StyledViewMainFieldInfo>
        </>
    );
}

export default ViewMainField;
