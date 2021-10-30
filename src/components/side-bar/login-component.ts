import { newElem } from "../../shared/newElem";
import { BaseComponent } from "../base-component";
import { Password } from "./password";

export class LoginComponent extends BaseComponent {
  public title: HTMLElement;

  public text: HTMLElement;

  public firstName: HTMLInputElement;
  public firstNameLabel: HTMLElement;
  public firstNameValidation: HTMLElement;

  public lastName: HTMLInputElement;
  public lastNameLabel: HTMLElement;
  public lastNameValidation: HTMLElement;

  public email: HTMLInputElement;
  public emailLabel: HTMLElement;
  public emailValidation: HTMLElement;

  public password: Password;

  public passwordConfirm: Password;

  public submitBtn: HTMLElement;

  constructor(formStyle: string, title: string, submitBtnText: string) {
    super("form", ["side-bar__form", formStyle]);

    this.title = newElem("label", ["side-bar__form__label"], title);

    this.text = newElem("span", ["side-bar__form__text"]);

    this.firstName = <HTMLInputElement>(
      newElem("input", ["side-bar__form__input"])
    );
    this.firstName.setAttribute("type", "text");
    this.firstName.setAttribute("placeholder", "First Name");
    this.firstName.setAttribute("id", "FirstName");
    this.firstName.style.backgroundImage = 'url("./images/user.png")';
    this.firstNameLabel = newElem(
      "label",
      ["side-bar__form__input-label"],
      "First Name"
    );
    this.firstNameLabel.setAttribute("for", "FirstName");
    this.firstNameValidation = newElem(
      "span",
      ["side-bar__form__input-validation"],
      "First Name contain unsupported characters (A-z)"
    );
    this.firstName.onchange = () => this.validateFirstName();

    this.lastName = <HTMLInputElement>(
      newElem("input", ["side-bar__form__input"])
    );
    this.lastName.setAttribute("type", "text");
    this.lastName.setAttribute("placeholder", "Last Name");
    this.lastName.setAttribute("id", "LastName");
    this.lastName.style.backgroundImage = 'url("./images/user.png")';
    this.lastNameLabel = newElem(
      "label",
      ["side-bar__form__input-label"],
      "Last Name"
    );
    this.lastNameLabel.setAttribute("for", "LastName");
    this.lastNameValidation = newElem(
      "span",
      ["side-bar__form__input-validation"],
      "Last Name contain unsupported characters (A-z)"
    );
    this.lastName.onchange = () => this.validateLastName();

    this.email = <HTMLInputElement>newElem("input", ["side-bar__form__input"]);
    this.email.setAttribute("type", "email");
    this.email.setAttribute("placeholder", "Email");
    this.email.setAttribute("id", "Email");
    this.email.style.backgroundImage = 'url("./images/email.png")';
    this.emailLabel = newElem(
      "label",
      ["side-bar__form__input-label"],
      "Email"
    );
    this.emailLabel.setAttribute("for", "Email");
    this.emailValidation = newElem(
      "span",
      ["side-bar__form__input-validation"],
      "Email contain unsupported characters"
    );
    this.email.onchange = () => this.validateEmail();
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
    rightImg.setAttribute("alt", submitBtnText);
    const submitInnerText = newElem("span", [], submitBtnText);
    this.submitBtn.append(submitInnerText, rightImg);
  }

  validateFirstName(): boolean {
    if (
      this.firstName.value.match(/[A-z]+/gm)?.join("").length !==
      this.firstName.value.length
    ) {
      this.firstNameValidation.classList.add("show-validation-text");
      return false;
    } else {
      this.firstNameValidation.classList.remove("show-validation-text");
      return true;
    }
  }

  validateLastName(): boolean {
    if (
      this.lastName.value.match(/[A-z]+/gm)?.join("").length !==
      this.lastName.value.length
    ) {
      this.lastNameValidation.classList.add("show-validation-text");
      return false;
    } else {
      this.lastNameValidation.classList.remove("show-validation-text");
      return true;
    }
  }

  validateEmail() {
    if (
      this.email.value
        .match(/[A-Za-z0-9_]{2,}[@]{1}[A-Za-z0-9]{3,}[.][A-Za-z]+$/gm)
        ?.join("").length !== this.email.value.length
    ) {
      this.emailValidation.classList.add("show-validation-text");
      return false;
    } else {
      this.emailValidation.classList.remove("show-validation-text");
      return true;
    }
  }
}
