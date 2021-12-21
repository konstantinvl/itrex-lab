import React from 'react';
import { StyledBlueSmallButton } from './styles/smallbutton';

function SmallButtonBlueIconLeft(props: { IconFC: () => JSX.Element; text: string }): JSX.Element {
    const { IconFC, text } = props;

    return (
        <StyledBlueSmallButton>
            <IconFC />
            <span style={{ marginLeft: '12px' }}>{text}</span>
        </StyledBlueSmallButton>
    );
}

export default SmallButtonBlueIconLeft;
