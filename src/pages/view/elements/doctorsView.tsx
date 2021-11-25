import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { CANCELED, CONFIRMED, WAITING } from '../../../sharedComponents/constants';
import { DoctorsData } from '../../../sharedComponents/interfaces';
import ViewMainField from '../../../sharedComponents/view/components/viewMainField.Component';
import MainField from '../../../sharedComponents/view/styles/viewMainField.style';

import ViewNavigation from '../../../sharedComponents/view/styles/viewNavigation.style';
import ViewNavigationButton from '../../../sharedComponents/view/styles/viewNavigationButton.style';
import Ul from '../../../sharedComponents/view/styles/viewNavigationUlLi.style';

const DOCTORS_PAGES = ['Patients', 'Resolutions'];

const DATA: DoctorsData = {
    patients: {
        title: 'Patients',
        dataSet: [
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CANCELED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: WAITING,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
            {
                name: 'Jane',
                surname: 'Cooper',
                photo: './JAN-COO-avatar.png',
                appointment: CONFIRMED,
                appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
                resolution:
                    'We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels',
            },
        ],
    },
    resolutions: {
        title: 'Resolutions',
        dataSet: [],
    },
};

function DoctorsView(): JSX.Element {
    return (
        <>
            <ViewNavigation>
                <Ul>
                    {DOCTORS_PAGES.map((page) => {
                        return (
                            <li key="page">
                                <ViewNavigationButton to={`/view/doctor/${page.toLowerCase()}`}>
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
                    <Route path="/patients" element={<ViewMainField data={DATA.patients} />} />
                    <Route
                        path="/resolutions"
                        element={<ViewMainField data={DATA.resolutions} />}
                    />
                    <Route path="/" element={<Navigate to="/view/doctor/patients" />} />
                </Route>
            </Routes>
        </>
    );
}

export default DoctorsView;
