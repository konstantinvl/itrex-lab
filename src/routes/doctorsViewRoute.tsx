import ViewNavigation from 'pages/viewPages/modules/viewNavigation';
import ViewMainFieldDoctorAppointment from 'pages/viewPages/viewMainFieldDoctorAppointment';
import ViewMainFieldDoctorResolutions from 'pages/viewPages/viewMainFieldDoctorResolution';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ViewMain from '../pages/viewPages/modules/viewMain';
import { appointmentGetRequested } from '../services/store/appointment/appointmentActions';
import { useAppDispatch, useAppSelector } from '../services/store/hooks';
import { DOCTORS_PAGES } from './viewLinkLists';

function DoctorsView(): JSX.Element {
    const { user } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user.id) {
            dispatch(appointmentGetRequested(user.role_name));
        }
    }, [user]);

    return (
        <>
            <ViewNavigation linkList={DOCTORS_PAGES} />

            <Routes>
                <Route path="/" element={<ViewMain />}>
                    <Route path="/patients" element={<ViewMainFieldDoctorAppointment />} />
                    <Route path="/resolutions" element={<ViewMainFieldDoctorResolutions />} />
                    <Route path="/" element={<Navigate to="/view/doctor/patients" />} />
                </Route>
            </Routes>
        </>
    );
}

export default DoctorsView;
