import React from 'react';

import { useAppSelector } from '../../services/store/hooks';
import ViewMainFieldControl from './modules/components/viewMainFieldControls';
import CreateAppointmentButton from './modules/components/createAppointmentButton';
import StyledViewMainFieldInfo from './modules/components/styles/viewMainFieldInfo';
import NoAppointmentPatientsMessage from './modules/components/noAppointmentsPatientsMessage';
import PatientViewCard from './modules/components/patientViewCard';

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
                        return <PatientViewCard info={info} key={info.id} />;
                    })
                ) : (
                    <NoAppointmentPatientsMessage />
                )}
            </StyledViewMainFieldInfo>
        </>
    );
}

export default ViewMainFieldDoctorAppointment;
