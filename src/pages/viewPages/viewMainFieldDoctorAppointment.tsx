import React from 'react';
import { useTitle } from 'react-use';
import { useAppSelector } from '../../services/store/hooks';
import CreateAppointmentButton from './modules/components/createAppointmentButton';
import DoctorViewCard from './modules/components/doctorViewCard';
import NoAppointmentDoctorsMessage from './modules/components/noAppointmentsDoctorsMessage';
import StyledViewMainFieldInfo from './modules/components/styles/viewMainFieldInfo';
import ViewMainFieldControl from './modules/components/viewMainFieldControls';

function ViewMainFieldDoctorAppointment(): JSX.Element {
    useTitle('Appointments');
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
