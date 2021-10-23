import { LoginComponent } from "./login-component";

export class SignUp extends LoginComponent {
  constructor() {
    super("sign-up", "Sign Up", "Sign Up");

    this.element.append(
      this.title,
      this.firstName,
      this.firstNameLabel,
      this.lastName,
      this.lastNameLabel,
      this.email,
      this.emailLabel,
      this.password.element,
      this.passwordLabel,
      this.passwordConfirm.element,
      this.passwordConfirmLabel,
      this.submitBtn
    );
  }
}
