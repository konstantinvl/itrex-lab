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

  // private passWrapper: HTMLElement = newElem("div", ["pass-wrapper"]);
  // private passConfirmWrapper: HTMLElement = newElem("div", ["pass-wrapper"]);

  // // private showPass: boolean = false;
  // // private showConfirm: boolean = false;

  // private passViewImg: HTMLElement;
  // private passConfirmViewImg: HTMLElement;

  constructor() {
    super("form", ["side-bar__form"]);

    this.title = newElem(
      "label",
      ["side-bar__form__label", "sign-up"],
      "Sign Up"
    );

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

    // this.password = <HTMLInputElement>(
    //   newElem("input", ["side-bar__form__input"])
    // );
    // this.password.setAttribute("type", "password");
    // this.password.setAttribute("placeholder", "Password");
    // this.password.style.backgroundImage = 'url("./images/password.png")';

    // this.passViewImg = newElem("div", ["side-bar__form__view-img"]);
    // this.passViewImg.style.background = "url(./images/hidden.png)";
    // this.passConfirmViewImg = this.passViewImg;

    // this.passWrapper.append(this.password, this.passViewImg);
    this.password = new Password("Password", "./images/password.png");

    // this.passwordConfirm = <HTMLInputElement>(
    //   newElem("input", ["side-bar__form__input"])
    // );
    // this.passwordConfirm.setAttribute("type", "password");
    // this.passwordConfirm.setAttribute("placeholder", "Confirm Password");
    // this.passwordConfirm.style.backgroundImage =
    //   'url("./images/passConfirm.png")';

    // this.passConfirmWrapper.append(
    //   this.passwordConfirm
    //   // this.passConfirmViewImg
    // );
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
