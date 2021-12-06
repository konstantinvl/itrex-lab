import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ViewNavigation from 'pages/viewPages/modules/viewNavigation';
import ViewMainFieldDoctorAppointment from 'pages/viewPages/viewMainFieldDoctorAppointment';
import { appointmentGetRequested } from '../services/store/appointment/appointmentActions';
import { useAppDispatch, useAppSelector } from '../services/store/hooks';
import ViewMainField from '../pages/viewPages/modules/viewMainField';

import ViewMain from '../pages/viewPages/modules/viewMain';
import { DOCTORS_PAGES } from './viewLinkLists';

function DoctorsView(): JSX.Element {
    const { user } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user.id) {
            dispatch(appointmentGetRequested(user.role_name));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <ViewNavigation linkList={DOCTORS_PAGES} />

            <Routes>
                <Route path="/" element={<ViewMain />}>
                    <Route path="/patients" element={<ViewMainFieldDoctorAppointment />} />
                    <Route
                        path="/resolutions"
                        element={<ViewMainField data={[]} title="Resolutions" />}
                    />
                    <Route path="/" element={<Navigate to="/view/doctor/patients" />} />
                </Route>
            </Routes>
        </>
    );
}

export default DoctorsView;
