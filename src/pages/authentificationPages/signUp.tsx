import React from 'react';
import AuthentificationFooter from './modules/components/authFooter';
import StyledFormWrapper from './modules/components/styles/authFormWrapper';
import SignUpFormik from './modules/signUpFormik';

function SignUp(): JSX.Element {
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
