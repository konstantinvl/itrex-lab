import React, { useEffect } from 'react';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthentificationPage from './routes/authentificationRoute';
import View from './pages/view/view';
import { useAppSelector } from './services/store/hooks';

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
    const { user } = useAppSelector((state) => state);

    const navigation = useNavigate();

    useEffect(() => {
        navigation('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <AppPage>
            <Routes>
                <Route path="/auth/*" element={<AuthentificationPage />} />
                <Route path="/view/*" element={<View />} />
                <Route path="/" element={<Navigate to={user.id ? '/view/' : '/auth/'} />} />
            </Routes>
        </AppPage>
    );
}

export default App;
