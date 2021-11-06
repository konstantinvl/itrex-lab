import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './elements/signIn';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background-image: url(${process.env.PUBLIC_URL}/images/bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 560px;
    height: 100%;
    min-height: 100%;
    background: #f4f7ff;
`;

// function DashboardIndex() {
//     return (
//         <div>
//             <h2>Dashboard Index</h2>
//         </div>
//     );
// }
function AuthentificationPage(): JSX.Element {
    return (
        <>
            <Main />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Aside>
                            <Outlet />
                        </Aside>
                    }
                >
                    <Route index element={<SignIn />} />
                    <Route path="olo" element={<div>hui</div>} />
                </Route>
            </Routes>
        </>
    );
}

export default AuthentificationPage;
