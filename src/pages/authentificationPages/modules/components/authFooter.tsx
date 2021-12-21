import React from 'react';
import StyledLinkBlueUnderlined from '../../../../components/styles/linkUnderlined';
import StyledAuthFooter from './styles/authFooter';

function AuthentificationFooter(props: {
    text: string;
    linkText: string;
    linkNavigation: string;
}): JSX.Element {
    const { text, linkText, linkNavigation } = props;
    return (
        <StyledAuthFooter>
            {text}
            <StyledLinkBlueUnderlined to={linkNavigation}>{linkText}</StyledLinkBlueUnderlined>
        </StyledAuthFooter>
    );
}

export default AuthentificationFooter;
