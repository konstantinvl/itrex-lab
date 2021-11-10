import { PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from '../../sharedComponents/interfaces';

export const SET_USER = 'user/setUser';

export function setUser(user: UserInterface): PayloadAction<UserInterface> {
    return { type: SET_USER, payload: user };
}
