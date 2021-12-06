import React from 'react';
import StyledNoContentMessage from './styles/viewNoContentMessage';
import StyledNoContentMessageImage from './styles/viewNoContentMessageImage';
import StyledNoContentMessageText from './styles/viewNoContentMessageText';

function NoAppointmentDoctorsMessage(): JSX.Element {
    return (
        <StyledNoContentMessage>
            <StyledNoContentMessageImage
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/medical-history.png)`,
                }}
            />
            <StyledNoContentMessageText data-testid="no-appointments">
                You have no patients yet
            </StyledNoContentMessageText>
            <StyledNoContentMessageText>
                To create a patient profile, please contact your administrator.
            </StyledNoContentMessageText>
        </StyledNoContentMessage>
    );
}

export default NoAppointmentDoctorsMessage;
