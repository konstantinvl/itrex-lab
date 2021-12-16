import React from 'react';
import { StyledGreySmallButton } from './styles/smallbutton';

function SmallButtonGreyIconLeft(props: {
    IconFC: () => JSX.Element;
    text: string;
    onClick: () => void;
}): JSX.Element {
    const { IconFC, text, onClick } = props;

    return (
        <StyledGreySmallButton
            onClick={() => {
                onClick();
            }}
        >
            <IconFC />
            <span style={{ marginLeft: '12px' }}>{text}</span>
        </StyledGreySmallButton>
    );
}

export default SmallButtonGreyIconLeft;
