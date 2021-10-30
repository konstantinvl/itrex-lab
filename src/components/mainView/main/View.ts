import { newElem } from "../../../shared/newElem";
import { BaseComponent } from "../../base-component";

export class View extends BaseComponent {
  private header: HTMLElement;
  private main: HTMLElement;
  constructor() {
    super("div", ["app__app__main__view"]);

    this.header = newElem("div", ["app__app__main__view__header"]);
    this.main = newElem("div", ["app__app__main__view__main"]);

    this.element.append(this.header, this.main);
  }
}
