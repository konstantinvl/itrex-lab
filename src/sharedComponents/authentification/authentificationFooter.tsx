import React from 'react';
import styled from 'styled-components';
import StyledLink from '../linkBlueUnderlined';

const AuthFoot = styled.div`
    height: 24px;
    margin-bottom: 80px;
    display: flex;
    justify-self: flex-end;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-left: 95px;
    & a {
        margin-left: 12px;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        height: unset;
        margin-left: 10%;
        // margin-top: 72px;
        margin-bottom: 44px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        & a {
            margin-left: 0;
        }
    }
`;

function AuthentificationFooter(props: {
    text: string;
    linkText: string;
    linkNavigation: string;
}): JSX.Element {
    const { text, linkText, linkNavigation } = props;
    return (
        <AuthFoot>
            {text}
            <StyledLink to={linkNavigation}>{linkText}</StyledLink>
        </AuthFoot>
    );
}

export default AuthentificationFooter;
