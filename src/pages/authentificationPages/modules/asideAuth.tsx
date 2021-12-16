import React from 'react';
import { Outlet } from 'react-router-dom';
import StyleAsideAuth from './components/styles/authAside';

function AsideAuth(): JSX.Element {
    return (
        <StyleAsideAuth>
            <Outlet />
        </StyleAsideAuth>
    );
}

export default AsideAuth;
