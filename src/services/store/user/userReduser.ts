/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface, UserState } from '../../interfaces';

const initialState: UserState = {
    id: '',
    first_name: '',
    last_name: '',
    role_name: '',
    photo: ``,
    errors: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserInterface>) => {
            return { ...action.payload, errors: [] };
        },
    },
});

export default userSlice.reducer;
