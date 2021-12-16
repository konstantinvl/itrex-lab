import React from 'react';
import StyledNoContentMessage from './styles/viewNoContentMessage';
import StyledNoContentMessageImage from './styles/viewNoContentMessageImage';
import StyledNoContentMessageText from './styles/viewNoContentMessageText';

function NoAppointmentPatientsMessage(): JSX.Element {
    return (
        <StyledNoContentMessage>
            <StyledNoContentMessageImage
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/medical-history.png)`,
                }}
            />
            <StyledNoContentMessageText data-testid="no-appointments">
                You have no appointments yet
            </StyledNoContentMessageText>
            <StyledNoContentMessageText>
                To create an appointment click `Create appointment` button.
            </StyledNoContentMessageText>
        </StyledNoContentMessage>
    );
}

export default NoAppointmentPatientsMessage;
