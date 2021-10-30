import { newElem } from "../../shared/newElem";
import { BaseComponent } from "../base-component";

export class Password extends BaseComponent {
  public input: HTMLInputElement;

  private viewImg: HTMLElement;

  private label: HTMLElement;

  private show = false;

  private passwordValidation: HTMLElement;

  constructor(placeholder: string, backgroundImg: string) {
    super("div", ["pass-wrapper"]);

    this.input = <HTMLInputElement>newElem("input", ["side-bar__form__input"]);
    this.input.setAttribute("type", "password");
    this.input.setAttribute("placeholder", placeholder);
    this.input.setAttribute("id", placeholder.split(" ").join(""));
    this.input.style.backgroundImage = `url("${backgroundImg}")`;

    this.label = newElem(
      "label",
      ["side-bar__form__input-label"],
      "Password Confirm"
    );
    this.label.setAttribute("for", placeholder.split(" ").join(""));

    this.viewImg = newElem("div", ["side-bar__form__view-img"]);
    this.viewImg.style.background = "url(./images/view.png)";
    this.viewImg.setAttribute("alt", "Reveal entered password");
    this.viewImg.onclick = () => this.setShow();

    this.passwordValidation = newElem(
      "span",
      ["side-bar__form__input-validation"],
      "Password contain unsupported characters"
    );

    this.input.onchange = () => this.validatePassword();

    this.element.append(
      this.label,
      this.input,
      this.viewImg,
      this.passwordValidation
    );
  }

  setShow() {
    this.show = !this.show;
    if (this.show) {
      this.input.setAttribute("type", "text");
      this.viewImg.style.background = "url(./images/hidden.png)";
      this.viewImg.setAttribute("alt", "Hide entered password");
    } else {
      this.input.setAttribute("type", "password");
      this.viewImg.style.background = "url(./images/view.png)";
      this.viewImg.setAttribute("alt", "Reveal entered password");
    }
  }

  public validatePassword(): boolean {
    if (
      this.input.value.match(/[A-z0-9]{6,}/gm)?.join("").length !==
      this.input.value.length
    ) {
      this.passwordValidation.classList.add("show-validation-text");
      return false;
    } else {
      this.passwordValidation.classList.remove("show-validation-text");
      return true;
    }
  }
}
