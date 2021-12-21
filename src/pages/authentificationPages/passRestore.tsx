import React from 'react';
import { useTitle } from 'react-use';
import StyleFormWrapper from './modules/components/styles/authFormWrapper';
import PassRestoreFormik from './modules/passRestoreFormik';

function PassRestore(): JSX.Element {
    useTitle('Password restoration');
    return (
        <>
            <StyleFormWrapper>
                <PassRestoreFormik />
            </StyleFormWrapper>
        </>
    );
}

export default PassRestore;
