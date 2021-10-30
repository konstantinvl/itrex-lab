import { Doctor } from '../../../shared/interfaces';
import { newElem } from '../../../shared/newElem';
import { BaseComponent } from '../../base-component';

export class ProfileMini extends BaseComponent {
  private name: HTMLElement;

  private status: HTMLElement;

  private photo: HTMLElement;

  private online: HTMLElement;

  constructor(profile: Doctor) {
    super('div', ['app__app__header__profile']);
    const infoWrapper = newElem('div', [
      'app__app__header__profile__info-wrapper',
    ]);
    const photoWrapper = newElem('div', [
      'app__app__header__profile__photo-wrapper',
    ]);

    this.name = newElem(
      'span',
      ['app__app__header__profile__info-wrapper__name'],
      `${profile.name} ${profile.surname}`,
    );
    this.status = newElem(
      'span',
      ['app__app__header__profile__info-wrapper__status'],
      profile.status,
    );

    infoWrapper.append(this.name, this.status);

    this.photo = newElem('div', [
      'app__app__header__profile__photo-wrapper__photo',
    ]);
    this.photo.style.backgroundImage = `url(${profile.photo})`;
    this.online = newElem('div', ['indicator']);
    this.online.style.backgroundColor = profile.online ? '#34C197' : '#FF2567';
    photoWrapper.append(this.photo, this.online);

    this.element.append(infoWrapper, photoWrapper);
  }
}
