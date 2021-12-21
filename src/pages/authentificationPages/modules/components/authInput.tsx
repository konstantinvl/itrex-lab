import React from 'react';
import StyledInput from './styles/authFormInput';
import StyledInputTypeIconWrapper from './styles/authInputTypeIconWrapper';
import StyledPasswordInputWrapper from './styles/authPasswordInputWrapper';
import StyledInvisibleLabel from './styles/invisibleLabel';

function AuthentificationInput(props: {
    type: string;
    icon: string;
    placeholder: string;
    invalid: boolean;
    name?: string;
}): JSX.Element {
    const { type, icon, placeholder, name, invalid } = props;
    return (
        <StyledPasswordInputWrapper>
            <StyledInvisibleLabel htmlFor={placeholder.split(' ').join('').toLowerCase()}>
                {placeholder.split(' ').join('').toLowerCase()}
            </StyledInvisibleLabel>
            <StyledInput
                id={placeholder.split(' ').join('').toLowerCase()}
                name={name || placeholder.split(' ').join('').toLowerCase()}
                type={type.toLowerCase()}
                placeholder={placeholder}
                invalid={invalid}
            />
            <StyledInputTypeIconWrapper
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/${icon})`,
                }}
            />
        </StyledPasswordInputWrapper>
    );
}

AuthentificationInput.defaultProps = {
    name: '',
};

export default AuthentificationInput;
