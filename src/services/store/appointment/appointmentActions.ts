import { PayloadAction } from '@reduxjs/toolkit';
import { AppointmentsData, AppointmentSetInterface } from '../../interfaces';

export const APPOINTMENT_REQUEST_FULLFILED = 'appointment/requestFullfiled';
export const APPOINTMENT_GET_REQUESTED = 'appointment/get_requested';
export const APPOINTMENT_SET_REQUESTED = 'appointment/set_requested';

export function appointmentsRequestFullfiled(
    appointment: AppointmentsData,
): PayloadAction<AppointmentsData> {
    return { type: APPOINTMENT_REQUEST_FULLFILED, payload: appointment };
}

export function appointmentGetRequested(role: string): PayloadAction<string> {
    return { type: APPOINTMENT_GET_REQUESTED, payload: role.toLowerCase() };
}

export function appointmentSetRequested(
    appointment: AppointmentSetInterface,
    role: string,
): PayloadAction<{ appointment: AppointmentSetInterface; role: string }> {
    return { type: APPOINTMENT_SET_REQUESTED, payload: { appointment, role } };
}
