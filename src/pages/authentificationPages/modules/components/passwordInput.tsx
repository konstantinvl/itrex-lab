import React, { useState } from 'react';
import StyledInput from './styles/authFormInput';
import StyledInputTypeIconWrapper from './styles/authInputTypeIconWrapper';
import StyledPasswordInputWrapper from './styles/authPasswordInputWrapper';
import StyledShowImg from './styles/authPasswordShowImg';
import StyledInvisibleLabel from './styles/invisibleLabel';

function AuthentificationPasswordInput(props: {
    placeholder: string;
    icon: string;
    invalid: boolean;
}): JSX.Element {
    const { placeholder, icon, invalid } = props;
    const [show, setShow] = useState<boolean>(false);
    return (
        <StyledPasswordInputWrapper>
            <StyledInvisibleLabel htmlFor={placeholder.split(' ').join('').toLowerCase()}>
                {placeholder.split(' ').join('').toLowerCase()}
            </StyledInvisibleLabel>
            <StyledInput
                id={placeholder.split(' ').join('').toLowerCase()}
                name={placeholder.split(' ').join('').toLowerCase()}
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                invalid={invalid}
            />
            <StyledInputTypeIconWrapper
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/${icon})`,
                }}
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
