/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { AppointmentsData, AppointmentsState } from '../../interfaces';

const initialState: AppointmentsState = {
    appointments: [],
    total: 0,
    errors: [],
};

export const appointmentsSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        requestFullfiled: (state, action: PayloadAction<AppointmentsData>) => {
            return { ...action.payload, errors: [] as SerializedError[] };
        },
    },
});

export default appointmentsSlice.reducer;