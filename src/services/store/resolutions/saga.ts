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
        yield put(resolutionsRequestFullfiled(resolutions));
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}

export function* resolutionSetRequest(
    action: PayloadAction<{ resolution: ResolutionSetInterface; role: string }>,
): Generator<
    | CallEffect<NewResolutionInterface>
    | PutEffect<{
          payload: string;
          type: string;
      }>
    | PutEffect<{
          payload: NotificationState;
          type: string;
      }>,
    void,
    NewResolutionInterface
> {
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
): Generator<
    | CallEffect<string>
    | PutEffect<{
          payload: string;
          type: string;
      }>
    | PutEffect<{
          payload: NotificationState;
          type: string;
      }>,
    void,
    string
> {
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
