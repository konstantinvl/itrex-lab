import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PassRestore from './elements/passRestore';
import SignIn from './elements/signIn';
import SignUp from './elements/signUp';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background-image: url(${process.env.PUBLIC_URL}/images/bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: 100%;
        min-height: 100px;
        max-height: 100px;
        padding: 0;
    }
`;
const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 560px;
    height: 100%;
    min-height: 100%;
    background: #f4f7ff;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: -28px;
        width: 100%;
        border-radius: 24px 24px 0px 0px;
        height: 100%;
        min-height: 568px;
        justify-content: space-between;
    }
`;

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
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/restorepassword" element={<PassRestore />} />
                </Route>
            </Routes>
        </>
    );
}

export default AuthentificationPage;
