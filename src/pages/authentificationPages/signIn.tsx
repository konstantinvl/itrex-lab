import React from 'react';
import { useTitle } from 'react-use';
import AuthentificationFooter from './modules/components/authFooter';
import StyledFormWrapper from './modules/components/styles/authFormWrapper';
import SignInFormik from './modules/signInFormik';

export function SignIn(): JSX.Element {
    useTitle('Sign In');
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
