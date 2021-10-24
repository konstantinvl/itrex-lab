import { LoginComponent } from "./login-component";

export class SignIn extends LoginComponent {
  constructor(passRestoreBtn: HTMLElement) {
    super("sign-in", "Sign In", "Sign In");

    this.element.append(
      this.title,
      this.emailLabel,
      this.email,

      this.password.element,
      this.submitBtn,
      passRestoreBtn
    );
  }
}
