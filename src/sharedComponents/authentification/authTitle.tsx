import React from 'react';
import { Link } from 'react-router-dom';
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
        margin-left: 10%;
        width: 80%;
        height: 32px;
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
        margin-top: 32px;
    }
`;
const Img = styled(Link)`
    margin-right: 16px;
    height: 24px;
    width: 24px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`;

function AuthentificationTitle(props: {
    title: string;
    img: string | undefined;
    link: string | null;
}): JSX.Element {
    const { title, img, link } = props;
    return (
        <Label htmlFor="authForm">
            {img && link ? (
                <Img
                    to={link}
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/${img})`,
                    }}
                />
            ) : (
                ''
            )}
            {title}
        </Label>
    );
}

export default AuthentificationTitle;
