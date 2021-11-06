/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: #7297ff;
    text-decoration: underline;

    cursor: pointer;

    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 0px;
    }
`;

function LinkBlueUnderlined(props: { text: string; navigation: string }): JSX.Element {
    const { text, navigation } = props;
    return <StyledLink to={navigation}>{text}</StyledLink>;
}
export default LinkBlueUnderlined;
