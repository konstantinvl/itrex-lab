import { newElem } from '../functions/newElem';
import { BaseComponent } from './base-component';

export class Password extends BaseComponent {
  public input: HTMLInputElement;

  private viewImg: HTMLElement;

  private show = false;

  constructor(placeholder: string, backgroundImg: string) {
    super('div', ['pass-wrapper']);

    this.input = <HTMLInputElement>newElem('input', ['side-bar__form__input']);
    this.input.setAttribute('type', 'password');
    this.input.setAttribute('placeholder', placeholder);
    this.input.style.backgroundImage = `url("${backgroundImg}")`;

    this.viewImg = newElem('div', ['side-bar__form__view-img']);
    this.viewImg.style.background = 'url(./images/view.png)';
    this.viewImg.onclick = () => this.setShow();

    this.element.append(this.input, this.viewImg);
  }

  setShow() {
    this.show = !this.show;
    if (this.show) {
      this.input.setAttribute('type', 'text');
      this.viewImg.style.background = 'url(./images/hidden.png)';
    } else {
      this.input.setAttribute('type', 'password');
      this.viewImg.style.background = 'url(./images/view.png)';
    }
  }
}
