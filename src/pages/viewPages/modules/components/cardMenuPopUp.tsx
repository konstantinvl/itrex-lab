import React from 'react';
import { StyledMenuButton, StyledMenuPopUp } from './styles/cardMenuPopUp';

function CardMenuPopUp(props: {
    visibility: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    menuButtons: {
        text: string;
        closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
    }[];
}): JSX.Element {
    const { visibility, onClose, menuButtons } = props;
    return (
        <StyledMenuPopUp
            onClick={(e) => {
                e.stopPropagation();
            }}
            style={
                visibility
                    ? { visibility: 'visible' }
                    : { visibility: 'collapse', overflow: 'hidden' }
            }
        >
            {menuButtons.map((button) => {
                return (
                    <StyledMenuButton
                        key={button.text}
                        onClick={() => {
                            onClose(false);
                            button.closeFunc(true);
                        }}
                    >
                        {button.text}
                    </StyledMenuButton>
                );
            })}
        </StyledMenuPopUp>
    );
}

export default CardMenuPopUp;
