import { Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import styled from 'styled-components';
import AuthentificationInput from '../../../sharedComponents/authentification/authInput';
import AuthentificationTitle from '../../../sharedComponents/authentification/authTitle';
import InputError from '../../../sharedComponents/authentification/errorText';

import SubmitButton from '../../../sharedComponents/authentification/submitButton';

import {
    FormWrapper,
    FormStyled,
} from '../../../sharedComponents/authentification/authentificationForm';
import StyledLink from '../../../sharedComponents/linkBlueUnderlined';

const Text = styled.span`
    margin-top: 32px;
    width: 368px;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    text-align: left;
    color: #a1abc9;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 10%;
        width: 80%;
        margin-top: 32px;
        font-weight: 400;
        font-size: 15px;
        line-height: 130%;
        text-align: left;
        color: #a1abc9;
    }
`;

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
});

function PassRestore(): JSX.Element {
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const [restorationEmail, setRestorationEmail] = useState<string>('');

    return (
        <>
            <FormWrapper>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        setIsSubmited(true);
                        setRestorationEmail(values.email);
                    }}
                >
                    {({ errors, touched }) => (
                        <FormStyled>
                            <AuthentificationTitle
                                title="Restore Password"
                                img="angle-left-b.png"
                                link="/auth/"
                            />
                            <Text>
                                {isSubmited ? (
                                    <>
                                        An email has been sent to{' '}
                                        <StyledLink to="#">{restorationEmail}</StyledLink>. Check
                                        your inbox, and click the reset link provided.
                                    </>
                                ) : (
                                    'Please use your email address, and we’ll send you the link to reset your password'
                                )}
                            </Text>
                            {!isSubmited && (
                                <>
                                    <AuthentificationInput
                                        type="email"
                                        icon="email.png"
                                        placeholder="Email"
                                    />
                                    <InputError
                                        text={errors.email && touched.email ? errors.email : ''}
                                    />
                                    <SubmitButton text="Send Reset Link" />
                                </>
                            )}
                        </FormStyled>
                    )}
                </Formik>
            </FormWrapper>
        </>
    );
}

export default PassRestore;
