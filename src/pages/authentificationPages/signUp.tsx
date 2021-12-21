import React from 'react';
import { useTitle } from 'react-use';
import AuthentificationFooter from './modules/components/authFooter';
import StyledFormWrapper from './modules/components/styles/authFormWrapper';
import SignUpFormik from './modules/signUpFormik';

function SignUp(): JSX.Element {
    useTitle('Sign Up');
    return (
        <>
            <StyledFormWrapper>
                <SignUpFormik />
            </StyledFormWrapper>
            <AuthentificationFooter
                text="Already have an account?"
                linkText="Sign in"
                linkNavigation="/auth/"
            />
        </>
    );
}

export default SignUp;
