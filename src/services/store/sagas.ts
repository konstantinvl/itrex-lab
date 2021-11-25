import {
    ForkEffect,
    select,
    SelectEffect,
    takeEvery,
    /* takeEvery */ takeLatest,
} from 'redux-saga/effects';

import {
    APPOINTMENT_GET_REQUESTED,
    APPOINTMENT_SET_REQUESTED,
} from './appointment/appointmentActions';
import { appointmentsGetRequest, appointmentsSetRequest } from './appointment/saga';
import { loginUser, signUpUser } from './user/saga';
import { LOGIN_REQUESTED, SIGNUP_REQUESTED } from './user/userActions';

function* mySaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(LOGIN_REQUESTED, loginUser);
    yield takeLatest(SIGNUP_REQUESTED, signUpUser);
    yield takeEvery(APPOINTMENT_SET_REQUESTED, appointmentsSetRequest);
    yield takeEvery(APPOINTMENT_GET_REQUESTED, appointmentsGetRequest);
    yield takeEvery('*', function* logger(action): Generator<SelectEffect, void, unknown> {
        const state = yield select();
        console.log('action', action);
        console.log('state after', state);
    });
}

export default mySaga;
