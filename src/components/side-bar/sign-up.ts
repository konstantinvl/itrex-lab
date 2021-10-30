import { LoginComponent } from "./login-component";

export class SignUp extends LoginComponent {
  constructor() {
    super("sign-up", "Sign Up", "Sign Up");

    this.element.append(
      this.title,
      this.firstNameLabel,
      this.firstName,
      this.firstNameValidation,

      this.lastNameLabel,
      this.lastName,
      this.lastNameValidation,

      this.emailLabel,
      this.email,
      this.emailValidation,

      this.password.element,

      this.passwordConfirm.element,

      this.submitBtn
    );
  }
}
