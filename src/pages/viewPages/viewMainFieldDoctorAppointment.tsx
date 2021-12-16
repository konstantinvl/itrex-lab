import React from 'react';

import { useAppSelector } from '../../services/store/hooks';
import ViewMainFieldControl from './modules/components/viewMainFieldControls';
import CreateAppointmentButton from './modules/components/createAppointmentButton';
import StyledViewMainFieldInfo from './modules/components/styles/viewMainFieldInfo';
import DoctorViewCard from './modules/components/doctorViewCard';
import NoAppointmentDoctorsMessage from './modules/components/noAppointmentsDoctorsMessage';

function ViewMainFieldDoctorAppointment(): JSX.Element {
    const { appointments } = useAppSelector((state) => state);
    return (
        <>
            <ViewMainFieldControl title="My Patients">
                <CreateAppointmentButton />
            </ViewMainFieldControl>
            <StyledViewMainFieldInfo
                style={
                    appointments.appointments.length
                        ? {}
                        : { justifyContent: 'center', alignItems: 'center' }
                }
            >
                {appointments.appointments.length ? (
                    appointments.appointments.map((info) => {
                        return <DoctorViewCard info={info} key={info.id} />;
                    })
                ) : (
                    <NoAppointmentDoctorsMessage />
                )}
            </StyledViewMainFieldInfo>
        </>
    );
}

export default ViewMainFieldDoctorAppointment;
