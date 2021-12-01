import React from 'react';

import AuthentificationFooter from './modules/components/authFooter';
import StyledFormWrapper from './modules/components/styles/authFormWrapper';
import SignInFormik from './modules/signInFormik';

export function SignIn(): JSX.Element {
    return (
        <>
            <StyledFormWrapper>
                <SignInFormik />
            </StyledFormWrapper>
            <AuthentificationFooter
                text="Don’t have an account?"
                linkText="Sign up"
                linkNavigation="/auth/sign-up"
            />
        </>
    );
}

export default SignIn;
