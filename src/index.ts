import { App } from "./app";
import "./assets/styles/index.scss";
import Router from "./components/router";
const app = new App();
const root = document.getElementById("root");

const router = new Router({ root: "/" });

router.add("sign-up", app.sideBar.startSignUp.bind(app.sideBar));
router.add("sign-in", app.sideBar.startSignIn.bind(app.sideBar));
router.add("password-restore", app.sideBar.startPassRestore.bind(app.sideBar));

window.onload = () => {
  root?.append(app.element);
};
