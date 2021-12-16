import StyledControlPanel from 'pages/viewPages/modules/components/styles/viewMainFieldControlPanel';
import StyledTitle from 'pages/viewPages/modules/components/styles/viewMainFieldControlTitle';
import React from 'react';
import { getDoctorsBySpec, getFreeTime, getSpecializations } from 'services/axios/requests';
import StyledMain from '../../components/styles/mainField';
import StyledViewMainFieldInfo from '../viewPages/modules/components/styles/viewMainFieldInfo';
import AppointmentFormik from './modules/newAppointmentFormik';
import NewAppointmentNavigation from './modules/newAppointmentNavigation';

function PatientNewAppointment(): JSX.Element {
    return (
        <>
            <NewAppointmentNavigation />
            <StyledMain>
                <StyledControlPanel>
                    <StyledTitle>Make an appointment</StyledTitle>
                </StyledControlPanel>
                <StyledViewMainFieldInfo>
                    <AppointmentFormik
                        getDoctorsBySpec={getDoctorsBySpec}
                        getFreeTime={getFreeTime}
                        getSpecializations={getSpecializations}
                    />
                </StyledViewMainFieldInfo>
            </StyledMain>
        </>
    );
}

export default PatientNewAppointment;
