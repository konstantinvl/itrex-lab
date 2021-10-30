import { LoginComponent } from './login-component';

export class SignIn extends LoginComponent {
  constructor(passRestoreBtn: HTMLElement) {
    super('sign-in', 'Sign In', 'Sign In');
    this.submitBtn.onclick = (ev) => {
      ev.preventDefault();
      window.history.pushState(null, '', '/doctor-view');
    };
    this.element.append(
      this.title,
      this.emailLabel,
      this.email,
      this.emailValidation,

      this.password.element,
      this.submitBtn,
      passRestoreBtn,
    );
  }
}
