import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { getAppointments, setAppointment } from '../../axios/requests';
import {
    AppointmentsData,
    AppointmentSetInterface,
    NewAppointmentInterface,
    NotificationState,
} from '../../interfaces';
import {
    notificationSendError,
    notificationSendSuccess,
} from '../notification/notificationActions';
import { resolutionsGetRequested } from '../resolutions/resolutionActions';
import { appointmentGetRequested, appointmentsRequestFullfiled } from './appointmentActions';

export function* appointmentsGetRequest(action: PayloadAction<string>): Generator<
    | CallEffect<AppointmentsData>
    | PutEffect<{
          payload: AppointmentsData;
          type: string;
      }>
    | PutEffect<{
          payload: string;
          type: string;
      }>
    | PutEffect<{
          payload: NotificationState;
          type: string;
      }>,
    void,
    AppointmentsData
> {
    try {
        const appointments: AppointmentsData = yield call(getAppointments, action.payload);

        yield put(appointmentsRequestFullfiled(appointments));
        yield put(resolutionsGetRequested(action.payload));
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}

export function* appointmentsSetRequest(
    action: PayloadAction<{ appointment: AppointmentSetInterface; role: string }>,
): Generator<
    | CallEffect<NewAppointmentInterface>
    | PutEffect<{
          payload: string;
          type: string;
      }>
    | PutEffect<{
          payload: NotificationState;
          type: string;
      }>,
    void,
    NewAppointmentInterface
> {
    try {
        const newAppointment: NewAppointmentInterface = yield call(
            setAppointment,
            action.payload.appointment,
        );

        if (newAppointment.id) {
            yield put(notificationSendSuccess('Appointment created succesfully'));
            yield put(appointmentGetRequested(action.payload.role));
        }
    } catch (e) {
        yield put(notificationSendError((e as Error).message));
    }
}
