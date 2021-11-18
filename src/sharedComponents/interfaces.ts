export interface UserInterface {
    name: string;
    surname: string;
    status: string;
    photo: string;
    online: boolean;
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
