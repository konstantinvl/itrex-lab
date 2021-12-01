import React from 'react';
import StyledInvisibleLabel from './styles/invisibleLabel';
import StyledInput from './styles/authFormInput';

function AuthentificationInput(props: {
    type: string;
    icon: string;
    placeholder: string;
    name?: string;
}): JSX.Element {
    const { type, icon, placeholder, name } = props;
    return (
        <>
            <StyledInvisibleLabel htmlFor={placeholder.split(' ').join('').toLowerCase()}>
                {type}
            </StyledInvisibleLabel>
            <StyledInput
                id={placeholder.split(' ').join('').toLowerCase()}
                name={name || placeholder.split(' ').join('').toLowerCase()}
                type={type.toLowerCase()}
                placeholder={placeholder}
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/${icon})` }}
            />
        </>
    );
}

AuthentificationInput.defaultProps = {
    name: '',
};

export default AuthentificationInput;
