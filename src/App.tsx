import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import AuthentificationPage from './pages/authentificationPage/authentificationPage';
import View from './pages/view/view';

const AppPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #e4ebff;

    @media screen and (min-width: 0px) and (max-width: 561px) {
        flex-direction: column;
    }
`;

function App(): JSX.Element {
    return (
        <AppPage>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/*" element={<AuthentificationPage />} />
                    <Route path="/view/*" element={<View />} />
                    <Route path="/" element={<Navigate to="/auth" />} />
                </Routes>
            </BrowserRouter>
        </AppPage>
    );
}

export default App;
