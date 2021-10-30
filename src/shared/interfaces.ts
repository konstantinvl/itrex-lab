export interface Route {
  path: string;
  cb: () => void;
}

export interface RouterOptions {
  root?: string;
}

export interface Doctor {
  name: string;
  surname: string;
  status: string;
  photo: string;
  online: boolean;
}

export interface Data {
  patients: DataSet;
  resolutions: DataSet;
}

export interface DataSet {
  title: string;
  patients?: Patient[];
}

export interface Patient {
  name: string;
  surname: string;
  photo: string;
  appointment: string;
  appointmentDate: string;
  prescription: string;
}
