/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationState } from '../../interfaces';

const initialState: NotificationState = {
    type: '',
    message: '',
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        sendNotification: (state, action: PayloadAction<NotificationState>) => {
            return { ...action.payload };
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteNotification: (_state) => ({ type: '', message: '' }),
    },
});

export default notificationSlice.reducer;
