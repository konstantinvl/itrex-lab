import MenuVerticalIcon from 'components/menuverticalIcon';
import React, { useState } from 'react';

import CardMenuPopUp from './cardMenuPopUp';
import StyledCardMenuButton from './styles/cardMenuButton';

function CardMenuButton(props: {
    menuButtons: {
        text: string;
        closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
    }[];
}): JSX.Element {
    const { menuButtons } = props;

    const [showPopup, setShowPopup] = useState<boolean>(false);
    return (
        <StyledCardMenuButton
            onClick={(e) => {
                e.stopPropagation();
                if (!showPopup) {
                    document.addEventListener('click', () => setShowPopup(false), { once: true });
                }
                setShowPopup(!showPopup);
            }}
        >
            <MenuVerticalIcon />
            <CardMenuPopUp
                visibility={showPopup}
                onClose={setShowPopup}
                menuButtons={menuButtons}
            />
        </StyledCardMenuButton>
    );
}

export default CardMenuButton;
