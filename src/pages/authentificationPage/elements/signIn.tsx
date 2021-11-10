import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AuthentificationFooter from '../../../sharedComponents/authentification/authentificationFooter';
import AuthentificationInput from '../../../sharedComponents/authentification/authInput';
import AuthentificationTitle from '../../../sharedComponents/authentification/authTitle';
import InputError from '../../../sharedComponents/authentification/errorText';
import AuthentificationPasswordInput from '../../../sharedComponents/authentification/passwordInput';
import SubmitButton from '../../../sharedComponents/authentification/submitButton';
import StyledLink from '../../../sharedComponents/linkBlueUnderlined';
import {
    FormWrapper,
    FormStyled,
} from '../../../sharedComponents/authentification/authentificationForm';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .matches(
            /([0-9]+)([A-z]+)|([A-z]+)([0-9]+)/gm,
            'Should contain of at least 1 letter and 1 number',
        )
        .required('Please enter the password'),
});

const LinkBlueStyled = styled(StyledLink)`
    margin-top: 32px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 10%;
        width: 80%;
    }
`;

function SignIn(): JSX.Element {
    const navigate = useNavigate();
    return (
        <>
            <FormWrapper>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        (/* values */) => {
                            navigate('/view');
                        }
                    }
                >
                    {({ errors, touched }) => (
                        <FormStyled>
                            <AuthentificationTitle title="Sign In" img="" link={null} />

                            <AuthentificationInput
                                type="email"
                                icon="email.png"
                                placeholder="Email"
                            />
                            <InputError text={errors.email && touched.email ? errors.email : ''} />
                            {}
                            <AuthentificationPasswordInput
                                icon="password.png"
                                placeholder="Password"
                            />
                            <InputError
                                text={errors.password && touched.password ? errors.password : ''}
                            />
                            <SubmitButton text="Sign In" />

                            <LinkBlueStyled to="/auth/restorepassword">
                                Forgot Password?
                            </LinkBlueStyled>
                        </FormStyled>
                    )}
                </Formik>
            </FormWrapper>
            <AuthentificationFooter
                text="Don’t have an account?"
                linkText="Sign up"
                linkNavigation="/auth/sign-up"
            />
        </>
    );
}

export default SignIn;
