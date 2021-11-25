import { PayloadAction } from '@reduxjs/toolkit';
import { LoginInterface, SignUpInterface, UserInterface } from '../../interfaces';

export const SET_USER = 'user/setUser';
export const LOGIN_REQUESTED = 'user/LOGIN_REQUESTED';
export const SIGNUP_REQUESTED = 'user/SIGNUP_REQUESTED';

export function setUser(user: UserInterface): PayloadAction<UserInterface> {
    return { type: SET_USER, payload: user };
}

export function loginRequested(login: LoginInterface): PayloadAction<LoginInterface> {
    return { type: LOGIN_REQUESTED, payload: login };
}

export function signUpRequested(user: SignUpInterface): PayloadAction<SignUpInterface> {
    return { type: SIGNUP_REQUESTED, payload: user };
}
