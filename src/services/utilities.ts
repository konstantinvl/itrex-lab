import { CANCELED, CONFIRMED, WAITING } from './constants';

export function AppointmentDate(date: string): string {
    return date;
}

export function indicatorColor(confirmation: string): string {
    switch (confirmation) {
        case CONFIRMED: {
            return '#34C197';
        }
        case CANCELED: {
            return '#FF2567';
        }
        case WAITING: {
            return '#7297FF';
        }
        default: {
            return '#FF2567';
        }
    }
}

export function appointmentCheck(confirmation: string): string {
    switch (confirmation) {
        case CONFIRMED: {
            return 'Appointment is confirmed';
        }
        case CANCELED: {
            return 'Appointment is canceled';
        }
        case WAITING: {
            return 'Waiting for confirmation... ';
        }
        default: {
            return 'Appointment not set';
        }
    }
}
