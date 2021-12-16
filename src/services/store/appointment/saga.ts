import { PayloadAction } from '@reduxjs/toolkit';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { getAppointments, setAppointment } from '../../axios/requests';
import {
    AppointmentsData,
    AppointmentSetInterface,
    NewAppointmentInterface,
} from '../../interfaces';
import { appointmentGetRequested, appointmentsRequestFullfiled } from './appointmentActions';

export function* appointmentsGetRequest(action: PayloadAction<string>): Generator<
    | CallEffect<AppointmentsData>
    | PutEffect<{
          payload: AppointmentsData;
          type: string;
      }>
    | PutEffect<{
          type: string;
          message: unknown;
      }>,
    void,
    AppointmentsData
> {
    try {
        const appointments: AppointmentsData = yield call(getAppointments, action.payload);

        yield put(appointmentsRequestFullfiled(appointments));
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e });
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
          type: string;
          message: unknown;
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
            yield put(appointmentGetRequested(action.payload.role));
        }
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e });
    }
}
