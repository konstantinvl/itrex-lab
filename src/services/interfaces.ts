import { SerializedError } from '@reduxjs/toolkit';

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
    errors: SerializedError[];
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

export interface DoctorsData {
    patients: DataSet;
    resolutions: DataSet;
}
export interface PatientsData {
    profile: DataSet;
    appointments: DataSet;
    resolutions: DataSet;
}

export interface DataSet {
    title: string;
    dataSet?: DoctorViewAppointment[] | PatientViewAppointment[];
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
