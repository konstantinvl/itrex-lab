import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

const Input = styled(Field)`
    margin-top: 40px;
    color: #a1abc9;
    width: 368px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #dce0ec;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
    padding-left: 64px;
    padding-right: 45px;
    background-position: 24px;
    background-repeat: no-repeat;
    cursor: pointer;
    &:focus-visible {
        outline: none;
        filter: drop-shadow(4px 32px rgba(218, 228, 255, 0.16));
        border: 1px solid #7297ff;
        box-sizing: border-box;
        box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 10%;
        width: 80%;
        margin-top: 24px;
        height: 40px;
        font-size: 15px;
        padding-left: 48px;
        background-position: 16px;
        background-repeat: no-repeat;
        position: relative;
    }
`;

const Label = styled.label`
    margin: 0;

    visibility: collapse;
    height: 0px;
    width: 0px;
    position: relative;
`;

function AuthentificationInput(props: {
    type: string;
    icon: string;
    placeholder: string;
}): JSX.Element {
    const { type, icon, placeholder } = props;
    return (
        <>
            <Label htmlFor={placeholder.split(' ').join('').toLowerCase()}>{type}</Label>
            <Input
                id={placeholder.split(' ').join('').toLowerCase()}
                name={placeholder.split(' ').join('').toLowerCase()}
                type={type.toLowerCase()}
                placeholder={placeholder}
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/${icon})` }}
            />
        </>
    );
}

export default AuthentificationInput;
//
