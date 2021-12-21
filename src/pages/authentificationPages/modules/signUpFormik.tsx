import { Formik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../../services/store/hooks';
import { signUpRequested } from '../../../services/store/user/userActions';
import AuthentificationInput from './components/authInput';
import SubmitButton from './components/authSubmitButton';
import AuthentificationTitle from './components/authTitle';
import InputError from './components/errorText';
import AuthentificationPasswordInput from './components/passwordInput';
import StyledFormAuth from './components/styles/authForm';
import { SignupSchema } from './validationSchemas';

function SignUpFormik(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmpassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                dispatch(
                    signUpRequested({
                        userName: values.email,
                        firstName: values.firstname,
                        lastName: values.lastname,
                        password: values.password,
                    }),
                );
            }}
        >
            {({ errors, touched }) => (
                <StyledFormAuth>
                    <AuthentificationTitle title="Sign Up" img="" link={null} />

                    <AuthentificationInput
                        type="text"
                        icon="user.png"
                        placeholder="First Name"
                        invalid={!!errors.firstname}
                    />
                    <InputError
                        text={errors.firstname && touched.firstname ? errors.firstname : ''}
                    />

                    <AuthentificationInput
                        type="text"
                        icon="user.png"
                        placeholder="Last Name"
                        invalid={!!errors.lastname}
                    />
                    <InputError text={errors.lastname && touched.lastname ? errors.lastname : ''} />

                    <AuthentificationInput
                        type="email"
                        icon="email.png"
                        placeholder="Email"
                        invalid={!!errors.email}
                    />
                    <InputError text={errors.email && touched.email ? errors.email : ''} />

                    <AuthentificationPasswordInput
                        icon="password.png"
                        placeholder="Password"
                        invalid={!!errors.password}
                    />
                    <InputError text={errors.password && touched.password ? errors.password : ''} />

                    <AuthentificationPasswordInput
                        icon="passConfirm.png"
                        placeholder="Confirm Password"
                        invalid={!!errors.confirmpassword}
                    />
                    <InputError
                        text={
                            errors.confirmpassword && touched.confirmpassword
                                ? errors.confirmpassword
                                : ''
                        }
                    />

                    <SubmitButton text="Sign Up" />
                </StyledFormAuth>
            )}
        </Formik>
    );
}

export default SignUpFormik;
