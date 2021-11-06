import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    height: 32px;
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    display: flex;
    align-items: center;
    color: #202225;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        height: 32px;
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
        margin-top: 32px;
    }
`;
const Img = styled.img`
    margin-right: 16px;
    cursor: pointer;
`;

function AuthentificationTitle(props: { title: string; img: string | undefined }): JSX.Element {
    const { title, img } = props;
    return (
        <Label htmlFor="authForm">
            {img ? <Img src={img} /> : ''}
            {title}
        </Label>
    );
}

export default AuthentificationTitle;
