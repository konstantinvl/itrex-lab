import React, { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { appointmentGetRequested } from '../../../services/store/appointment/appointmentActions';
import { useAppDispatch, useAppSelector } from '../../../services/store/hooks';
import ViewMainField from '../../../sharedComponents/view/components/viewMainField.Component';
import MainField from '../../../sharedComponents/view/styles/viewMainField.style';

import ViewNavigation from '../../../sharedComponents/view/styles/viewNavigation.style';
import ViewNavigationButton from '../../../sharedComponents/view/styles/viewNavigationButton.style';
import Ul from '../../../sharedComponents/view/styles/viewNavigationUlLi.style';

const PATIENTS_PAGES = ['Profile', 'Appointments', 'Resolutions'];

function PatientsView(): JSX.Element {
    const { user, appointments } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user.id) {
            dispatch(appointmentGetRequested(user.role_name));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <>
            <ViewNavigation>
                <Ul>
                    {PATIENTS_PAGES.map((page) => {
                        return (
                            <li key={page}>
                                <ViewNavigationButton to={`/view/patient/${page.toLowerCase()}`}>
                                    {page}
                                </ViewNavigationButton>
                            </li>
                        );
                    })}
                </Ul>
            </ViewNavigation>

            <Routes>
                <Route
                    path="/"
                    element={
                        <MainField>
                            <Outlet />
                        </MainField>
                    }
                >
                    <Route path="/profile" element={<ViewMainField data={[]} title="Profile" />} />
                    <Route
                        path="/appointments"
                        element={
                            <ViewMainField data={appointments.appointments} title="Appointments" />
                        }
                    />
                    <Route
                        path="/resolutions"
                        element={<ViewMainField data={[]} title="Resolutions" />}
                    />
                    <Route path="/" element={<Navigate to="/view/patient/appointments" />} />
                </Route>
            </Routes>
        </>
    );
}

export default PatientsView;
