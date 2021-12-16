import StyledMainField from 'pages/modules/components/styles/mainField';
import React from 'react';
import { Outlet } from 'react-router-dom';

function ViewMain(): JSX.Element {
    return (
        <StyledMainField>
            <Outlet />
        </StyledMainField>
    );
}

export default ViewMain;
