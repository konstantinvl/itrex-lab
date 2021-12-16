import React, { useState } from 'react';
import AuthentificationInput from './authInput';
import StyledPasswordInputWrapper from './styles/authPasswordInputWrapper';
import StyledShowImg from './styles/authPasswordShowImg';

function AuthentificationPasswordInput(props: { placeholder: string; icon: string }): JSX.Element {
    const { placeholder, icon } = props;
    const [show, setShow] = useState<boolean>(false);
    return (
        <StyledPasswordInputWrapper>
            <AuthentificationInput
                type={show ? 'text' : 'password'}
                icon={icon}
                placeholder={placeholder}
            />
            <StyledShowImg
                src={`${process.env.PUBLIC_URL}/images/icons/${show ? 'view.png' : 'hidden.png'}`}
                alt={show ? 'Show password' : 'Hide password'}
                onClick={() => setShow(!show)}
            />
        </StyledPasswordInputWrapper>
    );
}

export default AuthentificationPasswordInput;
