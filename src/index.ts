import { App } from "./app";
import "./assets/styles/index.scss";
const app = new App();
const root = document.getElementById("root");
// window.onload = () => {
root?.append(app.element);
// };
