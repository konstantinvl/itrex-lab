import { BaseComponent } from './components/base-component';
import './assets/styles/app.scss';
import { SideBar } from './components/side-bar/side-bar';
import { newElem } from './shared/newElem';
import Router from './components/router';
import { MainView } from './components/mainView/mainView';

export class App extends BaseComponent {
  private sideBar: SideBar;

  private main: MainView;

  constructor() {
    super('div', ['app']);
    this.sideBar = new SideBar();

    const router = new Router({ root: '/' });

    router.add('sign-up', this.signUp.bind(this));
    router.add('sign-in', this.signIn.bind(this));
    router.add('password-restore', this.restorePassword.bind(this));
    router.add('doctor-view', this.login.bind(this));

    this.main = new MainView();
    this.element.append(this.main.element, this.sideBar.element);
    this.start();
  }

  start() {
    window.history.pushState(null, '', '/sign-up');
    // this.login();
  }

  login() {
    this.sideBar.element.classList.add('hide');
    this.main.start();
  }

  signUp() {
    this.sideBar.element.classList.remove('hide');
    this.main.stop();
    this.sideBar.startSignUp();
  }

  signIn() {
    this.sideBar.element.classList.remove('hide');
    this.main.stop();
    this.sideBar.startSignIn();
  }

  restorePassword() {
    this.sideBar.element.classList.remove('hide');
    this.main.stop();
    this.sideBar.startPassRestore();
  }
}
