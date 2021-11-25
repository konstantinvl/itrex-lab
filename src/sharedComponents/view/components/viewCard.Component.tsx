import React from 'react';
import { Appointment } from '../../../services/interfaces';
import DoctorViewCard from './doctorViewCard.Component';
import PatientViewCard from './patientViewCard.Component';

function ViewCard(props: { info: Appointment; status: string }): JSX.Element {
    const { info, status } = props;
    switch (status) {
        case 'Doctor':
            return <DoctorViewCard info={info} />;
        case 'Patient':
            return <PatientViewCard info={info} />;
        default:
            return <></>;
    }
}

export default ViewCard;
