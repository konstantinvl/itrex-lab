import { BaseComponent } from "./components/base-component";
import "./assets/styles/app.scss";
import { SideBar } from "./components/side-bar";
import { newElem } from "./functions/newElem";
import Router from "./components/router";

export class App extends BaseComponent {
  public sideBar: SideBar;

  private main: HTMLElement;

  // public router: Router;

  constructor() {
    super("div", ["app"]);
    this.sideBar = new SideBar();

    // const routes = [
    //   {
    //     route: "sign-in",
    //     cb: this.sideBar.startSignUp.bind(this.sideBar).bind(this),
    //   },
    //   {
    //     route: "sign-up",
    //     cb: this.sideBar.startSignUp.bind(this.sideBar).bind(this),
    //   },
    //   {
    //     route: "password-restore",
    //     cb: this.sideBar.startPassRestore.bind(this.sideBar).bind(this),
    //   },
    // ];
    // this.router = new Router({ root: "/" });
    // routes.forEach((route) => {
    //   this.router.add(route.route, route.cb);
    // });
    // this.router = new Router({ root: "/" });

    // this.router.add("sign-up", this.sideBar.startSignUp.bind(this.sideBar));
    // this.router.add("sign-in", this.sideBar.startSignIn.bind(this.sideBar));
    // this.router.add(
    //   "password-restore",
    //   this.sideBar.startPassRestore.bind(this.sideBar)
    // );

    // window.onpopstate = () => {
    //   this.router.routes
    //     .find((route) => {
    //       return (
    //         route.path === this.router.clearSlashes(window.location.pathname)
    //       );
    //     })
    //     ?.cb();
    //   console.log(12312312);
    // };

    this.main = newElem("main", ["app__main"]);
    this.element.append(this.main, this.sideBar.element);
    this.start();
  }

  start() {
    window.history.pushState(null, "", "/sign-up");
  }
}
