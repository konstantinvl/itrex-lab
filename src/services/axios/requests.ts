import { AxiosResponse } from 'axios';
import {
    AppointmentsData,
    AppointmentSetInterface,
    DoctorBySpec,
    LoginInterface,
    NewAppointmentInterface,
    SessionData,
    SignUpInterface,
    SpecializationData,
    UserInterface,
} from '../interfaces';
import axiosInstance from './axios';

export const login = async ({
    userName,
    password,
}: LoginInterface): Promise<AxiosResponse<SessionData>> => {
    const responce: AxiosResponse<SessionData> = await axiosInstance
        .post(`auth/login/`, { userName, password })
        .then((response) => response.data);
    return responce;
};

export async function signUp(user: SignUpInterface): Promise<SessionData> {
    const responce: SessionData = await axiosInstance
        .post(`auth/registration/`, { ...user })
        .then((response) => response.data);
    return responce;
}

export async function getProfile(): Promise<UserInterface> {
    const profile: UserInterface = await axiosInstance
        .get('auth/profile')
        .then((response) => response.data);
    return profile;
}

export async function getAppointments(role: string): Promise<AppointmentsData> {
    const profile: AppointmentsData = await axiosInstance
        .get(`appointments/${role}/me`, { params: { offset: '0', limit: '100' } })
        .then((response) => response.data);
    return profile;
}

export async function getSpecializations(): Promise<SpecializationData[]> {
    const specs: SpecializationData[] = await axiosInstance
        .get(`specializations`)
        .then((response) => response.data);
    return specs;
}

export async function getDoctorsBySpec(id: string): Promise<DoctorBySpec[]> {
    const doctors: DoctorBySpec[] = await axiosInstance
        .get(`doctors/specialization/${id}`)
        .then((response) => response.data);
    return doctors;
}

export async function getFreeTime(date: string, doctorID: string): Promise<string[]> {
    const freeTime: string[] = await axiosInstance
        .get(`appointments/time/free`, { params: { date, doctorID } })
        .then((response) => response.data);
    return freeTime;
}

export async function setAppointment(
    appointment: AppointmentSetInterface,
): Promise<NewAppointmentInterface> {
    const newAppointment: NewAppointmentInterface = await axiosInstance
        .post(`appointments/`, { ...appointment })
        .then((response) => response.data);
    return newAppointment;
}

export default getProfile;
