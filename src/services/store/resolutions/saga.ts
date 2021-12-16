import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { getResolutions, setResolution, updateResolution } from '../../axios/requests';
import {
    NewResolutionInterface,
    NotificationState,
    ResolutionSetInterface,
    ResolutionsState,
} from '../../interfaces';
import {
    notificationSendError,
    notificationSendSuccess,
} from '../notification/notificationActions';
import { resolutionsGetRequested, resolutionsRequestFullfiled } from './resolutionActions';

export function* resolutionsGetRequest(action: PayloadAction<string>): Generator<
    | CallEffect<ResolutionsState>
    | PutEffect<{
          payload: ResolutionsState;
          type: string;
      }>
    | PutEffect<{
          payload: NotificationState;
          type: string;
      }>,
    void,
    ResolutionsState
> {
    try {
        const resolutions: ResolutionsState = yield call(getResolutions, action.payload);
        console.log(resolutions);
        yield put(resolutionsRequestFullfiled(resolutions));
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}

export function* resolutionSetRequest(
    action: PayloadAction<{ resolution: ResolutionSetInterface; role: string }>,
) {
    try {
        const newResolution: NewResolutionInterface = yield call(
            setResolution,
            action.payload.resolution,
        );

        if (newResolution.id) {
            yield put(resolutionsGetRequested(action.payload.role));
            yield put(notificationSendSuccess('New resolution created succesfully'));
        }
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}

export function* resolutionUpdateRequest(
    action: PayloadAction<{ resolution: ResolutionSetInterface; role: string }>,
) {
    try {
        const newResolutionId: string = yield call(updateResolution, action.payload.resolution);

        if (newResolutionId) {
            yield put(resolutionsGetRequested(action.payload.role));
            yield put(notificationSendSuccess('Resolution was successfully updated'));
        }
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}
