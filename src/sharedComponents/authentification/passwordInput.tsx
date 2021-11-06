import React, { useState } from 'react';
import styled from 'styled-components';
import AuthentificationInput from './authInput';

const Wrapper = styled.div`
    width: 368px;
    position: relative;
    margin-top: 40px;
    & label {
        position: absolute;
    }
    & input {
        margin-top: 0px;
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: 100%;
        // height: 40px;
        position: relative;
        margin-left: 0;
        & input {
            margin-left: 10%;
            width: 80%;
        }
        & span {
            margin-left: 10%;
            width: 80%;
        }
    }
`;
const ViewImg = styled.img`
    margin: 0;
    position: absolute;
    right: 16px;
    top: 16px;
    height: 24px;
    width: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;

    @media screen and (min-width: 0px) and (max-width: 561px) {
        right: calc(10% + 16px);
        top: 8px;
    }
`;

function AuthentificationPasswordInput(props: { placeholder: string; icon: string }): JSX.Element {
    const { placeholder, icon } = props;
    const [show, setShow] = useState<boolean>(false);
    return (
        <Wrapper>
            <AuthentificationInput
                type={show ? 'text' : 'password'}
                icon={icon}
                placeholder={placeholder}
            />
            <ViewImg
                src={`${process.env.PUBLIC_URL}images/icons/${show ? 'view.png' : 'hidden.png'}`}
                alt={show ? 'Show password' : 'Hide password'}
                onClick={() => setShow(!show)}
            />
        </Wrapper>
    );
}

export default AuthentificationPasswordInput;
