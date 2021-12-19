import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { AppointmentsData, AppointmentsState } from '../../interfaces';

const initialState: AppointmentsState = {
    appointments: [],
    total: 0,
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
