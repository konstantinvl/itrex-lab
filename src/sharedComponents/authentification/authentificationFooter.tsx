import React from 'react';
import styled from 'styled-components';
import LinkBlueUnderlined from '../linkBlueUnderlined';

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
            <LinkBlueUnderlined text={linkText} navigation={linkNavigation} />
        </AuthFoot>
    );
}

export default AuthentificationFooter;
