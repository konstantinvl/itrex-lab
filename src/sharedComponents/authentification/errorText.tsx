import React from 'react';
import styled from 'styled-components';

const Error = styled.span`
    margin-top: 8px;
    height: 16px;
    font-size: 13px;
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: -0.24px;

    color: #f6657f;
    & ~ input {
        margin-top: 16px;
    }
    & ~ div {
        margin-top: 16px;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        visibility: hidden;
        height: 0px;
        margin-top: 0px;
    }
`;

function InputError(props: { text: string }): JSX.Element {
    const { text } = props;
    return <Error>{text}</Error>;
}

export default InputError;
