import { AppWrapper, Header, Main } from 'components/styles/view';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfileMini from '../components/profileMini';
import PatientNewAppointment from '../pages/newAppointmentPage/newAppointmentPage';
import { useAppSelector } from '../services/store/hooks';
import DoctorsView from './doctorsViewRoute';
import PatientsView from './patientViewRoute';

function View(): JSX.Element {
    const { user } = useAppSelector((state) => state);
    return (
        <AppWrapper>
            <Header>
                <img src={`${process.env.PUBLIC_URL}/images/icons/logo.png`} alt="Logo" />
                <ProfileMini />
            </Header>
            <Main>
                <Routes>
                    <Route path="/doctor/*" element={<DoctorsView />} />
                    <Route path="/patient/*" element={<PatientsView />} />
                    <Route path="/admin/*" element={<div />} />
                    <Route path="/newAppointment/*" element={<PatientNewAppointment />} />
                    <Route
                        path="/"
                        element={<Navigate to={`/view/${user.role_name.toLowerCase()}`} />}
                    />
                </Routes>
            </Main>
        </AppWrapper>
    );
}

export default View;
