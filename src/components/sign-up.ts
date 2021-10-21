import { newElem } from "../functions/newElem";
import { BaseComponent } from "./base-component";
import { Password } from "./password";

export class SignUp extends BaseComponent {
  private title: HTMLElement;

  private firstName: HTMLInputElement;

  private lastName: HTMLInputElement;

  private email: HTMLInputElement;

  private password: Password;

  private passwordConfirm: Password;

  private submitBtn: HTMLElement;

  constructor() {
    super("form", ["side-bar__form"]);

    this.title = newElem("label", ["side-bar__form__label"], "Sign Up");

    this.firstName = <HTMLInputElement>(
      newElem("input", ["side-bar__form__input"])
    );
    this.firstName.setAttribute("type", "text");
    this.firstName.setAttribute("placeholder", "First Name");
    this.firstName.style.backgroundImage = 'url("./images/user.png")';

    this.lastName = <HTMLInputElement>(
      newElem("input", ["side-bar__form__input"])
    );
    this.lastName.setAttribute("type", "text");
    this.lastName.setAttribute("placeholder", "Last Name");
    this.lastName.style.backgroundImage = 'url("./images/user.png")';

    this.email = <HTMLInputElement>newElem("input", ["side-bar__form__input"]);
    this.email.setAttribute("type", "email");
    this.email.setAttribute("placeholder", "Email");
    this.email.style.backgroundImage = 'url("./images/email.png")';

    this.password = new Password("Password", "./images/password.png");

    this.passwordConfirm = new Password(
      "Confirm Password",
      "./images/passConfirm.png"
    );

    this.submitBtn = newElem("button", ["side-bar__form__submit"]);
    this.submitBtn.setAttribute("type", "submit");
    this.submitBtn.onclick = (ev) => {
      ev.preventDefault();
    };
    const rightImg = <HTMLImageElement>(
      newElem("img", ["side-bar__form__submit__inner-img"])
    );
    rightImg.src = "./images/angle-right-b.png";
    const submitInnerText = newElem("span", [], "Sign Up");
    this.submitBtn.append(submitInnerText, rightImg);

    this.element.append(
      this.title,
      this.firstName,
      this.lastName,
      this.email,
      // this.password,
      // openedEyeImg,
      // closedEyeImg,
      this.password.element,
      this.passwordConfirm.element,
      this.submitBtn
    );
  }
}
