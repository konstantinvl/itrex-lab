import React from 'react';
import { NotificationState } from 'services/interfaces';
import StyledToastText from './styles/toastText';
import StyledToastTitle from './styles/toastTitle';
import StyledToastWrapper from './styles/toastWrapper';

function ToastMessage(props: { notification: NotificationState }): JSX.Element {
    const { notification } = props;
    return (
        <StyledToastWrapper>
            <StyledToastTitle>{notification.type}</StyledToastTitle>
            <StyledToastText>{notification.message}</StyledToastText>
        </StyledToastWrapper>
    );
}

export default ToastMessage;
