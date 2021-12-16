import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AsideAuth from '../pages/authentificationPages/modules/asideAuth';
import StyleMainAuth from '../pages/authentificationPages/modules/components/styles/authMain';
import PassRestore from '../pages/authentificationPages/passRestore';
import SignIn from '../pages/authentificationPages/signIn';
import SignUp from '../pages/authentificationPages/signUp';

function AuthentificationPage(): JSX.Element {
    return (
        <>
            <StyleMainAuth />
            <Routes>
                <Route path="/" element={<AsideAuth />}>
                    <Route index element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/restorepassword" element={<PassRestore />} />
                </Route>
            </Routes>
        </>
    );
}

export default AuthentificationPage;
