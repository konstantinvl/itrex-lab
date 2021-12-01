import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import tokenStorage from '../../auth/auth';
import getProfile, { login, signUp } from '../../axios/requests';
import { LoginInterface, SessionData, SignUpInterface, UserInterface } from '../../interfaces';
import { setUser } from './userActions';

export function* loginUser(action: PayloadAction<LoginInterface>) {
    try {
        const session: SessionData = yield call(login, action.payload);

        tokenStorage.setSession(session);

        const profile: UserInterface = yield call(getProfile);

        yield put(setUser(profile));
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e });
    }
}

export function* signUpUser(action: PayloadAction<SignUpInterface>) {
    try {
        const session: SessionData = yield call(signUp, action.payload);

        tokenStorage.setSession(session);

        const profile: UserInterface = yield call(getProfile);

        yield put(setUser(profile));
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e });
    }
}
