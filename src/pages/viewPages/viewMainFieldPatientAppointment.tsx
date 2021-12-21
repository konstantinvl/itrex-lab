import React from 'react';
import { useTitle } from 'react-use';
import { useAppSelector } from '../../services/store/hooks';
import CreateAppointmentButton from './modules/components/createAppointmentButton';
import NoAppointmentPatientsMessage from './modules/components/noAppointmentsPatientsMessage';
import PatientViewCard from './modules/components/patientViewCard';
import StyledViewMainFieldInfo from './modules/components/styles/viewMainFieldInfo';
import ViewMainFieldControl from './modules/components/viewMainFieldControls';

function ViewMainFieldPatientAppointment(): JSX.Element {
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
                        return <PatientViewCard info={info} key={info.id} />;
                    })
                ) : (
                    <NoAppointmentPatientsMessage />
                )}
            </StyledViewMainFieldInfo>
        </>
    );
}

export default ViewMainFieldPatientAppointment;
