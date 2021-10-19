import { BaseComponent } from './components/base-component';
import './assets/styles/app.scss';
import { SideBar } from './components/side-bar';
import { newElem } from './functions/newElem';

export class App extends BaseComponent {
  private sideBar: SideBar;

  private main: HTMLElement;

  constructor() {
    super('div', ['app']);
    this.sideBar = new SideBar();
    this.main = newElem('main', ['app__main']);
    this.element.append(this.main, this.sideBar.element);
  }
}
