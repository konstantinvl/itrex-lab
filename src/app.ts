import { BaseComponent } from "./components/base-component";
import "./assets/styles/app.scss";
import { SideBar } from "./components/side-bar";
import { newElem } from "./functions/newElem";
import Router from "./components/router";

export class App extends BaseComponent {
  private sideBar: SideBar;

  private main: HTMLElement;

  private router: Router;

  constructor() {
    super("div", ["app"]);
    this.sideBar = new SideBar();

    this.router = new Router({ root: "/" });

    this.router.add("sign-up", this.sideBar.startSignUp.bind(this.sideBar));
    this.router.add("sign-in", this.sideBar.startSignIn.bind(this.sideBar));
    this.router.add(
      "password-restore",
      this.sideBar.startPassRestore.bind(this.sideBar)
    );

    this.main = newElem("main", ["app__main"]);
    this.element.append(this.main, this.sideBar.element);
    this.start();
  }

  start() {
    this.router.navigate("/sign-up");
  }
}
