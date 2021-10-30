import { newElem } from '../../shared/newElem';
import { LoginComponent } from './login-component';

export class PassRestore extends LoginComponent {
  constructor() {
    super('password', 'Restore Password', 'Send Reset Link');

    const leftImg = <HTMLImageElement>(
      newElem('img', ['side-bar__form__label__inner-img'])
    );
    leftImg.src = './images/angle-left-b.png';
    leftImg.setAttribute('alt', 'Back to Sign In page');
    leftImg.onclick = () => window.history.pushState(null, '', '/sign-in');
    this.title.prepend(leftImg);

    this.text.innerHTML =
      'Please use your email address, and we’ll send you the link to reset your password';

    this.element.append(
      this.title,
      this.text,
      this.emailLabel,
      this.email,
      this.emailValidation,
      this.submitBtn,
    );
  }

  sendEmail(): void {
    this.text.innerHTML = `An email has been sent to <span class="link-blue-underline">
    ${this.email.value}</span>. Check your inbox, and click the reset link provided.`;
    this.email.value = '';
    this.email.remove();
    this.submitBtn.remove();
  }
}
