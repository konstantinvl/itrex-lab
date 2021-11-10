import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import AuthentificationFooter from '../../../sharedComponents/authentification/authentificationFooter';
import AuthentificationInput from '../../../sharedComponents/authentification/authInput';
import AuthentificationTitle from '../../../sharedComponents/authentification/authTitle';
import InputError from '../../../sharedComponents/authentification/errorText';
import AuthentificationPasswordInput from '../../../sharedComponents/authentification/passwordInput';
import SubmitButton from '../../../sharedComponents/authentification/submitButton';

import {
    FormWrapper,
    FormStyled,
} from '../../../sharedComponents/authentification/authentificationForm';

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Should be at least 2 characters long')
        .max(50, `Shouldn't be more than 50 characters long`),
    lasttname: Yup.string()
        .min(2, 'Should be at least 2 characters long')
        .max(50, `Shouldn't be more than 50 characters long`),
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .matches(/[A-z]{1,}[0-9]{1,}/gm, 'Should contain of at least 1 letter and 1 number')
        .required('Please enter the password'),
    comfirmpassword: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .matches(/[A-z]{1,}[0-9]{1,}/gm, 'Should contain of at least 1 letter and 1 number')
        .required('Please enter the password'),
});

function SignUp(): JSX.Element {
    return (
        <>
            <FormWrapper>
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        comfirmpassword: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        (/* values */) => {
                            // same shape as initial values
                            // console.log(values);
                        }
                    }
                >
                    {({ errors, touched }) => (
                        <FormStyled>
                            <AuthentificationTitle title="Sign Up" img="" link={null} />

                            <AuthentificationInput
                                type="text"
                                icon="user.png"
                                placeholder="First Name"
                            />
                            <InputError
                                text={errors.firstname && touched.firstname ? errors.firstname : ''}
                            />

                            <AuthentificationInput
                                type="text"
                                icon="user.png"
                                placeholder="Last Name"
                            />
                            <InputError
                                text={errors.lastname && touched.lastname ? errors.lastname : ''}
                            />

                            <AuthentificationInput
                                type="email"
                                icon="email.png"
                                placeholder="Email"
                            />
                            <InputError text={errors.email && touched.email ? errors.email : ''} />

                            <AuthentificationPasswordInput
                                icon="password.png"
                                placeholder="Password"
                            />
                            <InputError
                                text={errors.password && touched.password ? errors.password : ''}
                            />

                            <AuthentificationPasswordInput
                                icon="passConfirm.png"
                                placeholder="Confirm Password"
                            />
                            <InputError
                                text={
                                    errors.comfirmpassword && touched.comfirmpassword
                                        ? errors.comfirmpassword
                                        : ''
                                }
                            />

                            <SubmitButton text="Sign Up" />
                        </FormStyled>
                    )}
                </Formik>
            </FormWrapper>
            <AuthentificationFooter
                text="Already have an account?"
                linkText="Sign in"
                linkNavigation="/auth/"
            />
        </>
    );
}

export default SignUp;
