import { newElem } from "../functions/newElem";
import { BaseComponent } from "./base-component";
import { Password } from "./password";

export class SignIn extends BaseComponent {
  private title: HTMLElement;

  private email: HTMLInputElement;

  private password: Password;

  private submitBtn: HTMLElement;

  constructor(passRestoreBtn: HTMLElement) {
    super("form", ["side-bar__form"]);

    this.title = newElem(
      "label",
      ["side-bar__form__label", "sign-in"],
      "Sign In"
    );

    this.email = <HTMLInputElement>newElem("input", ["side-bar__form__input"]);
    this.email.setAttribute("type", "email");
    this.email.setAttribute("placeholder", "Email");
    this.email.style.backgroundImage = 'url("./images/email.png")';

    this.password = new Password("Password", "./images/password.png");

    this.submitBtn = newElem("button", ["side-bar__form__submit"]);
    this.submitBtn.setAttribute("type", "submit");
    this.submitBtn.onclick = (ev) => {
      ev.preventDefault();
    };
    const rightImg = <HTMLImageElement>(
      newElem("img", ["side-bar__form__submit__inner-img"])
    );
    rightImg.src = "./images/angle-right-b.png";
    this.submitBtn.append("Sign In", rightImg);

    this.element.append(
      this.title,
      this.email,
      this.password.element,
      this.submitBtn,
      passRestoreBtn
    );
  }
}
