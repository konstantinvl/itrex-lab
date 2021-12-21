import { Formik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../../services/store/hooks';
import { loginRequested } from '../../../services/store/user/userActions';
import AuthentificationInput from './components/authInput';
import SubmitButton from './components/authSubmitButton';
import AuthentificationTitle from './components/authTitle';
import InputError from './components/errorText';
import AuthentificationPasswordInput from './components/passwordInput';
import StyledFormAuth from './components/styles/authForm';
import StyledLinkUnderlinedAuth from './components/styles/authStyledLinkUnderlined';
import { SignInSchema } from './validationSchemas';

function SignInFormik(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <Formik
            initialValues={{
                userName: '',
                password: '',
            }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
                dispatch(loginRequested(values));
            }}
        >
            {({ errors, touched }) => (
                <StyledFormAuth>
                    <AuthentificationTitle title="Sign In" img="" link={null} />

                    <AuthentificationInput
                        name="userName"
                        type="email"
                        icon="email.png"
                        placeholder="Email"
                        invalid={!!errors.userName}
                    />
                    <InputError text={errors.userName && touched.userName ? errors.userName : ''} />

                    <AuthentificationPasswordInput
                        icon="password.png"
                        placeholder="Password"
                        invalid={!!errors.password}
                    />
                    <InputError text={errors.password && touched.password ? errors.password : ''} />
                    <SubmitButton text="Sign In" />

                    <StyledLinkUnderlinedAuth to="/auth/restorepassword">
                        Forgot Password?
                    </StyledLinkUnderlinedAuth>
                </StyledFormAuth>
            )}
        </Formik>
    );
}

export default SignInFormik;
