import React from 'react';
import { DoctorViewAppointment, PatientViewAppointment } from '../interfaces';
import DoctorViewCard from './doctorViewCard.Component';
import PatientViewCard from './patientViewCard.Component';

function ViewCard(props: {
    info: DoctorViewAppointment | PatientViewAppointment;
    status: string;
}): JSX.Element {
    const { info, status } = props;
    switch (status) {
        case 'Doctor':
            return <DoctorViewCard info={info as DoctorViewAppointment} />;
        case 'Patient':
            return <PatientViewCard info={info as PatientViewAppointment} />;
        default:
            return <></>;
    }
}

export default ViewCard;
