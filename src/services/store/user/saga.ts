import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
// import { AxiosResponse } from 'axios';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import tokenStorage from '../../auth/auth';
import { getProfile, login, signUp } from '../../axios/requests';
import {
    LoginInterface,
    NotificationState,
    SessionData,
    SignUpInterface,
    UserInterface,
} from '../../interfaces';
import {
    notificationSendError,
    notificationSendSuccess,
} from '../notification/notificationActions';
import { setUser } from './userActions';

export function* loginUser(action: PayloadAction<LoginInterface>): Generator<
    | CallEffect<AxiosResponse<SessionData>>
    | CallEffect<UserInterface>
    | PutEffect<{
          payload: UserInterface;
          type: string;
      }>
    | PutEffect<{
          payload: NotificationState;
          type: string;
      }>,
    void,
    SessionData & UserInterface
> {
    try {
        const session: SessionData = yield call(login, action.payload);
        tokenStorage.setSession(session);

        const profile: UserInterface = yield call(getProfile);
        yield put(setUser(profile));
        yield put(notificationSendSuccess('Login succesfull'));
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}

export function* signUpUser(action: PayloadAction<SignUpInterface>): Generator<
    | CallEffect<SessionData>
    | CallEffect<UserInterface>
    | PutEffect<{
          payload: UserInterface;
          type: string;
      }>
    | PutEffect,
    void,
    SessionData & UserInterface
> {
    try {
        const session: SessionData = yield call(signUp, action.payload);

        tokenStorage.setSession(session);

        const profile: UserInterface = yield call(getProfile);

        yield put(setUser(profile));
        yield put(notificationSendSuccess('You registered succesfully and logged in'));
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}
