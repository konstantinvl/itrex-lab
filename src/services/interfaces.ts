import { SerializedError } from '@reduxjs/toolkit';
import { NotificationType } from 'components/enums';

export interface UserState {
    id: string;
    first_name: string;
    last_name: string;
    photo: string;
    role_name: string;
    errors: SerializedError[];
}

export interface AppointmentsState {
    appointments: Appointment[];
    total: number;
}

export interface ResolutionsState {
    resolutions: Resolution[];
    total: 0;
}

export interface Resolution {
    id: string;
    appointment_id: string;
    next_appointment_date: string;
    resolution: string;
    visit_date: string;
    doctor?: Doctor;
    patient?: Patient;
}

export interface ResolutionSetInterface {
    resolution: string;
    appointmentID: string;
}

export interface NewResolutionInterface {
    id: string;
    appointment_id: string;
    next_appointment_date: string;
    resolution: string;
}

export interface UserInterface {
    id: string;
    first_name: string;
    last_name: string;
    photo: string;
    role_name: string;
}

export interface PatientViewAppointment {
    name: string;
    surname: string;
    photo: string;
    speciality: string;
    appointmentDate: string;
    simptoms: string;
}

export interface DoctorViewAppointment {
    name: string;
    surname: string;
    photo: string;
    appointment: string;
    appointmentDate: string;
    resolution: string;
}

/* auth interfaces */

export interface SessionData {
    access_token: string;
    refresh_token: string;
}

export interface LoginInterface {
    userName: string;
    password: string;
}

export interface SignUpInterface {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
}

// export interface SignUpInterface {

// }

/* Appointment interface */
export interface AppointmentsData {
    appointments: Appointment[];
    total: number;
}

export interface Appointment {
    id: string;
    reason: string;
    note: string;
    patient_id: string;
    doctor_id: string;
    visit_date: string;
    status: string;
    doctor?: Doctor;
    patient?: Patient;
}

export interface Doctor {
    last_name: string;
    first_name: string;
    id: string;
    photo: string;
    specialization_name: string;
}
export interface Patient {
    last_name: string;
    first_name: string;
    id: string;
    photo: string;
}
// jfdhgkjsdhfgh
export interface SpecializationData {
    id: string;
    specialization_name: string;
}

export interface DoctorBySpec {
    first_name: string;
    last_name: string;
    id: string;
}

export interface AppointmentSetInterface {
    date: string;
    reason: string;
    note: string;
    doctorID: string;
}

export interface NewAppointmentInterface {
    id: string;
    patient_id: string;
    doctor_id: string;
    visit_date: string;
    reason: string;
    note: string;
    status: string;
}
/* notification interface */

export interface NotificationState {
    type: NotificationType.SUCCESS | NotificationType.ERROR | '';
    message: string;
}
