import React from 'react';
import { Formik } from 'formik';
import { useAppDispatch } from '../../../services/store/hooks';
import { signUpRequested } from '../../../services/store/user/userActions';
import AuthentificationInput from './components/authInput';
import AuthentificationTitle from './components/authTitle';
import InputError from './components/errorText';
import AuthentificationPasswordInput from './components/passwordInput';
import SubmitButton from './components/authSubmitButton';
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

                    <AuthentificationInput type="text" icon="user.png" placeholder="First Name" />
                    <InputError
                        text={errors.firstname && touched.firstname ? errors.firstname : ''}
                    />

                    <AuthentificationInput type="text" icon="user.png" placeholder="Last Name" />
                    <InputError text={errors.lastname && touched.lastname ? errors.lastname : ''} />

                    <AuthentificationInput type="email" icon="email.png" placeholder="Email" />
                    <InputError text={errors.email && touched.email ? errors.email : ''} />

                    <AuthentificationPasswordInput icon="password.png" placeholder="Password" />
                    <InputError text={errors.password && touched.password ? errors.password : ''} />

                    <AuthentificationPasswordInput
                        icon="passConfirm.png"
                        placeholder="Confirm Password"
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
