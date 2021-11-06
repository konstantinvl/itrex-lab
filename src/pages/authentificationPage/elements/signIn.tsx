import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import AuthentificationFooter from '../../../sharedComponents/authentification/authentificationFooter';
import AuthentificationInput from '../../../sharedComponents/authentification/authInput';
import AuthentificationTitle from '../../../sharedComponents/authentification/authTitle';
import InputError from '../../../sharedComponents/authentification/errorText';
import AuthentificationPasswordInput from '../../../sharedComponents/authentification/passwordInput';
import SubmitButton from '../../../sharedComponents/authentification/submitButton';
import LinkBlueUnderlined from '../../../sharedComponents/linkBlueUnderlined';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .matches(/[A-z]{1,}[0-9]{1,}/gm, 'Should contain of at least 1 letter and 1 number')
        .required('Please enter the password'),
});

const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
};

function SignIn(): JSX.Element {
    return (
        <>
            <div style={{ display: 'flex', flex: 1, marginLeft: '95px' }}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form style={formStyle as Record<string | number, string>}>
                            <AuthentificationTitle title="Sign In" img="" />

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

                            <LinkBlueUnderlined
                                text="Forgot Password?"
                                navigation="/auth/restorepassword"
                            />
                        </Form>
                    )}
                </Formik>
            </div>
            <AuthentificationFooter
                text="Don’t have an account?"
                linkText="Sign up"
                linkNavigation="/auth/signup"
            />
        </>
    );
}

export default SignIn;
