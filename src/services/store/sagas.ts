import { ForkEffect, takeLatest } from 'redux-saga/effects';
import {
    APPOINTMENT_GET_REQUESTED,
    APPOINTMENT_SET_REQUESTED,
} from './appointment/appointmentActions';
import { appointmentsGetRequest, appointmentsSetRequest } from './appointment/saga';
import {
    RESOLUTION_GET_REQUESTED,
    RESOLUTION_SET_REQUESTED,
    RESOLUTION_UPDATE_REQUESTED,
} from './resolutions/resolutionActions';
import {
    resolutionSetRequest,
    resolutionsGetRequest,
    resolutionUpdateRequest,
} from './resolutions/saga';
import { loginUser, signUpUser } from './user/saga';
import { LOGIN_REQUESTED, SIGNUP_REQUESTED } from './user/userActions';

function* mySaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(LOGIN_REQUESTED, loginUser);
    yield takeLatest(SIGNUP_REQUESTED, signUpUser);
    yield takeLatest(APPOINTMENT_SET_REQUESTED, appointmentsSetRequest);
    yield takeLatest(APPOINTMENT_GET_REQUESTED, appointmentsGetRequest);
    yield takeLatest(RESOLUTION_GET_REQUESTED, resolutionsGetRequest);
    yield takeLatest(RESOLUTION_SET_REQUESTED, resolutionSetRequest);
    yield takeLatest(RESOLUTION_UPDATE_REQUESTED, resolutionUpdateRequest);
}

export default mySaga;
