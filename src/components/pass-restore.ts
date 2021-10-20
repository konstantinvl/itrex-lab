import { newElem } from "../functions/newElem";
import { BaseComponent } from "./base-component";

export class PassRestore extends BaseComponent {
  private title: HTMLElement;

  private text: HTMLElement;

  private email: HTMLInputElement;

  private submitBtn: HTMLElement;

  constructor(callback: Function) {
    super("form", ["side-bar__form"]);

    this.title = newElem(
      "label",
      ["side-bar__form__label", "sign-in"],
      "Restore Password"
    );
    const leftImg = <HTMLImageElement>(
      newElem("img", ["side-bar__form__label__inner-img"])
    );
    leftImg.src = "./images/angle-left-b.png";
    leftImg.onclick = () => callback();
    this.title.prepend(leftImg);

    this.text = newElem(
      "span",
      ["side-bar__form__text"],
      `Please use your email address, and we’ll send you the link to reset your password`
    );

    this.email = <HTMLInputElement>newElem("input", ["side-bar__form__input"]);
    this.email.setAttribute("type", "email");
    this.email.setAttribute("placeholder", "Email");
    this.email.style.backgroundImage = 'url("./images/email.png")';

    this.submitBtn = newElem("button", ["side-bar__form__submit"]);
    this.submitBtn.setAttribute("type", "submit");
    this.submitBtn.onclick = (ev) => {
      ev.preventDefault();
      this.sendEmail();
    };
    const rightImg = <HTMLImageElement>(
      newElem("img", ["side-bar__form__submit__inner-img"])
    );
    rightImg.src = "./images/angle-right-b.png";
    this.submitBtn.append("Send Reset Link", rightImg);

    this.element.append(this.title, this.text, this.email, this.submitBtn);
  }

  sendEmail() {
    this.text.innerHTML = `An email has been sent to <span class="link-blue-underline">${this.email.value}</span>. Check your inbox, and click the reset link provided.`;
    this.email.value = "";
    this.email.remove();
    this.submitBtn.remove();
  }
}
