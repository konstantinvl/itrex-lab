import ViewNavigation from 'pages/viewPages/modules/viewNavigation';
import ViewMainFieldPatientAppointment from 'pages/viewPages/viewMainFieldPatientAppointment';
import ViewMainFieldPatientResolutions from 'pages/viewPages/viewMainFieldPatientResolution';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ViewMain from '../pages/viewPages/modules/viewMain';
import ViewMainField from '../pages/viewPages/modules/viewMainField';
import { appointmentGetRequested } from '../services/store/appointment/appointmentActions';
import { useAppDispatch, useAppSelector } from '../services/store/hooks';
import { PATIENTS_PAGES } from './viewLinkLists';

function PatientsView(): JSX.Element {
    const { user } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user.id) {
            dispatch(appointmentGetRequested(user.role_name));
        }
    }, [user]);

    return (
        <>
            <ViewNavigation linkList={PATIENTS_PAGES} />

            <Routes>
                <Route path="/" element={<ViewMain />}>
                    <Route path="/profile" element={<ViewMainField data={[]} title="Profile" />} />
                    <Route path="/appointments" element={<ViewMainFieldPatientAppointment />} />
                    <Route path="/resolutions" element={<ViewMainFieldPatientResolutions />} />
                    <Route path="/" element={<Navigate to="/view/patient/appointments" />} />
                </Route>
            </Routes>
        </>
    );
}

export default PatientsView;
