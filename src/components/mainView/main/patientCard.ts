import { Patient } from '../../../shared/interfaces';
import { newElem } from '../../../shared/newElem';
import { BaseComponent } from '../../base-component';
import '../../../assets/styles/patientCard.scss';
import { CANCELED, CONFIRMED, WAITING } from '../../../shared/constants';

export class PatientCard extends BaseComponent {
  private overall: HTMLElement;

  private details: HTMLElement;

  private overallInfoWrapper: HTMLElement;

  private overallInfo: HTMLElement;

  private name: HTMLElement;

  private appointment: HTMLElement;

  private photo: HTMLElement;

  private menu: HTMLElement;

  private appointmentDate: HTMLElement;

  private prescription: HTMLElement;

  constructor(patient: Patient) {
    super('div', ['patient-card']);

    this.overall = newElem('div', ['patient-card__overall']);
    this.overallInfo = newElem('div', ['patient-card__overall__info']);
    this.overallInfoWrapper = newElem('div', [
      'patient-card__overall__info-wrapper',
    ]);
    this.details = newElem('div', ['patient-card__details']);

    this.name = newElem(
      'span',
      ['patient-card__overall__info__name'],
      `${patient.name} ${patient.surname}`,
    );
    this.appointment = newElem('div', [
      'patient-card__overall__info__appointment',
    ]);
    this.appointment.append(
      this.indicatorCheck(patient.appointment),
      this.appointmentCheck(patient.appointment),
    );
    this.overallInfo.append(this.name, this.appointment);
    this.photo = newElem('div', ['patient-card__overall__photo']);
    this.photo.style.backgroundImage = `url(${patient.photo})`;
    this.menu = newElem('div', ['patient-card__overall__menu']);
    this.menu.style.backgroundImage = 'url(./images/menu-vertical.png)';
    this.overallInfoWrapper.append(this.photo, this.overallInfo);

    this.overall.append(this.overallInfoWrapper, this.menu);

    this.appointmentDate = newElem(
      'span',
      ['patient-card__details__date'],
      patient.appointmentDate,
    );
    this.appointmentDate.style.backgroundImage =
      'url(./images/clock-three.png)';
    this.prescription = newElem(
      'span',
      ['patient-card__details__prescription'],
      patient.prescription,
    );
    this.prescription.style.backgroundImage =
      'url(./images/clipboard-blank.png)';
    this.details.append(this.appointmentDate, this.prescription);

    this.element.append(this.overall, this.details);
  }

  indicatorCheck(confirmation: string): HTMLElement {
    const indicator = newElem('div', ['indicator']);

    switch (confirmation) {
      case CONFIRMED: {
        indicator.style.backgroundColor = '#34C197';
        return indicator;
      }
      case CANCELED: {
        indicator.style.backgroundColor = '#FF2567';
        return indicator;
      }
      case WAITING: {
        indicator.style.backgroundColor = '#7297FF';
        return indicator;
      }
      default: {
        indicator.style.backgroundColor = '#FF2567';
        return indicator;
      }
    }
  }

  appointmentCheck(confirmation: string): string {
    switch (confirmation) {
      case 'CONFIRMED': {
        return 'Appointment is confirmed';
      }
      case 'CANCELED': {
        return 'Appointment is canceled';
      }
      case 'WAITING': {
        return 'Waiting for confirmation... ';
      }
      default: {
        return 'Appointment not set';
      }
    }
  }
}
