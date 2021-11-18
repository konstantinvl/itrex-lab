/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from '../../sharedComponents/interfaces';

interface UserState {
    user: UserInterface;
}

const initialState: UserState = {
    user: {
        name: 'Miranda',
        surname: 'Nelson',
        status: 'Doctor',
        photo: `MIR-NEL-avatar.png`,
        online: true,
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserInterface>) => {
            state.user = action.payload;
        },
    },
});

// export const { setUser } = counterSlice.actions;
export default userSlice.reducer;

// `${process.env.PUBLIC_URL}/images/avatars/
