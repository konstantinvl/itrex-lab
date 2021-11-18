import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { PatientsData } from '../../../sharedComponents/interfaces';
import ViewMainField from '../../../sharedComponents/view/components/viewMainField.Component';
import MainField from '../../../sharedComponents/view/styles/viewMainField.style';

import ViewNavigation from '../../../sharedComponents/view/styles/viewNavigation.style';
import ViewNavigationButton from '../../../sharedComponents/view/styles/viewNavigationButton.style';
import Ul from '../../../sharedComponents/view/styles/viewNavigationUlLi.style';

const PATIENTS_PAGES = ['Profile', 'Appointments', 'Resolutions'];

const DATA: PatientsData = {
    profile: {
        title: 'Profile',
        dataSet: [],
    },
    appointments: {
        title: 'Appointments',
        dataSet: [
            {
                name: 'Joe',
                surname: 'Milton',
                photo: 'JOE-MIL-avatar.png',
                speciality: 'Therapist',
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                simptoms: 'Headache, pant',
            },
        ],
    },
    resolutions: {
        title: 'Resolutions',
        dataSet: [],
    },
};

function PatientsView(): JSX.Element {
    return (
        <>
            <ViewNavigation>
                <Ul>
                    {PATIENTS_PAGES.map((page) => {
                        return (
                            <li key="page">
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
                    <Route path="/profile" element={<ViewMainField data={DATA.profile} />} />
                    <Route
                        path="/appointments"
                        element={<ViewMainField data={DATA.appointments} />}
                    />
                    <Route
                        path="/resolutions"
                        element={<ViewMainField data={DATA.resolutions} />}
                    />
                    <Route path="/" element={<Navigate to="/view/patient/appointments" />} />
                </Route>
            </Routes>
        </>
    );
}

export default PatientsView;
