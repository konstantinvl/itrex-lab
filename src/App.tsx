import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import AuthentificationPage from './pages/authentificationPage/authentificationPage';

const AppPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #e4ebff;
`;

function App(): JSX.Element {
    return (
        <AppPage>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/*" element={<AuthentificationPage />} />
                    <Route path="/" element={<Navigate to="/auth" />} />
                </Routes>
            </BrowserRouter>
        </AppPage>
    );
}

export default App;
