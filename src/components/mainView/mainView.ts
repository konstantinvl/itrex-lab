import { BaseComponent } from '../base-component';
import { Header } from './header/header';
import { Main } from './main/main';

export class MainView extends BaseComponent {
  private header: Header;

  private main: Main;

  constructor() {
    super('div', ['app__app']);
    this.header = new Header();
    this.main = new Main();
  }

  public start() {
    this.element.classList.add('main-view');
    this.element.append(this.header.element, this.main.element);
  }

  public stop() {
    this.element.classList.remove('main-view');
    this.element.innerHTML = '';
  }
}
