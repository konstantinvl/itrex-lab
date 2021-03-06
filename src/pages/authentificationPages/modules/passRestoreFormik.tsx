import { Formik } from 'formik';
import React, { useState } from 'react';
import StyledLinkUnderlined from '../../../components/styles/linkUnderlined';
import AuthentificationInput from './components/authInput';
import SubmitButton from './components/authSubmitButton';
import AuthentificationTitle from './components/authTitle';
import InputError from './components/errorText';
import StyledFormAuth from './components/styles/authForm';
import StyledText from './components/styles/authFormText';
import { PassRestoreSchema } from './validationSchemas';

function PassRestoreFormik(): JSX.Element {
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const [restorationEmail, setRestorationEmail] = useState<string>('');
    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={PassRestoreSchema}
            onSubmit={(values) => {
                setIsSubmited(true);
                setRestorationEmail(values.email);
            }}
        >
            {({ errors, touched }) => (
                <StyledFormAuth>
                    <AuthentificationTitle
                        title="Restore Password"
                        img="angle-left-b.png"
                        link="/auth/"
                    />
                    <StyledText>
                        {isSubmited ? (
                            <>
                                An email has been sent to{' '}
                                <StyledLinkUnderlined to="#">
                                    {restorationEmail}
                                </StyledLinkUnderlined>
                                . Check your inbox, and click the reset link provided.
                            </>
                        ) : (
                            'Please use your email address, and we’ll send you the link to reset your password'
                        )}
                    </StyledText>
                    {!isSubmited && (
                        <>
                            <AuthentificationInput
                                type="email"
                                icon="email.png"
                                placeholder="Email"
                                invalid={!!errors.email}
                            />
                            <InputError text={errors.email && touched.email ? errors.email : ''} />
                            <SubmitButton text="Send Reset Link" />
                        </>
                    )}
                </StyledFormAuth>
            )}
        </Formik>
    );
}

export default PassRestoreFormik;
