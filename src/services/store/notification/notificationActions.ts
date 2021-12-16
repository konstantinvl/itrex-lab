import { Action, PayloadAction } from '@reduxjs/toolkit';
import { NotificationType } from 'components/enums';
import { NotificationState } from 'services/interfaces';

export const NOTIFICATION_SEND = 'notification/sendNotification';
export const NOTIFICATION_DELETE = 'notification/deleteNotification';

export function notificationSendError(message: string): PayloadAction<NotificationState> {
    return { type: NOTIFICATION_SEND, payload: { type: NotificationType.ERROR, message } };
}

export function notificationSendSuccess(message: string): PayloadAction<NotificationState> {
    return { type: NOTIFICATION_SEND, payload: { type: NotificationType.SUCCESS, message } };
}

export function notificationDelete(): Action {
    return { type: NOTIFICATION_DELETE };
}
