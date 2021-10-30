import { BaseComponent } from '../../base-component';
import '../../../assets/styles/header.scss';
import { ProfileMini } from './profileMini';
import { Doctor } from '../../../shared/interfaces';

const FIRST_DOCTOR: Doctor = {
  name: 'Miranda',
  surname: 'Nelson',
  status: 'Doctor',
  photo: './images/MIR-NEL-avatar.png',
  online: true,
};

export class Header extends BaseComponent {
  private logo: HTMLImageElement;

  private profileMini: ProfileMini;

  constructor() {
    super('header', ['app__app__header']);
    this.logo = new Image();
    this.logo.src = './images/logo.png';
    this.logo.setAttribute('alt', 'Logo');

    this.profileMini = new ProfileMini(FIRST_DOCTOR);

    this.element.append(this.logo, this.profileMini.element);
  }
}
