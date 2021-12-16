import React from 'react';
import StyleFormWrapper from './modules/components/styles/authFormWrapper';
import PassRestoreFormik from './modules/passRestoreFormik';

function PassRestore(): JSX.Element {
    return (
        <>
            <StyleFormWrapper>
                <PassRestoreFormik />
            </StyleFormWrapper>
        </>
    );
}

export default PassRestore;
