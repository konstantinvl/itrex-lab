import { LoginComponent } from "./login-component";

export class SignUp extends LoginComponent {
  constructor() {
    super("sign-up", "Sign Up", "Sign Up");

    this.element.append(
      this.title,
      this.firstNameLabel,
      this.firstName,

      this.lastNameLabel,
      this.lastName,

      this.emailLabel,
      this.email,

      this.password.element,

      this.passwordConfirm.element,

      this.submitBtn
    );
  }
}
