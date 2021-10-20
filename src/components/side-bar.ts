import { BaseComponent } from './base-component';
import '../assets/styles/side-bar.scss';
import { newElem } from '../functions/newElem';
import { SignUp } from './sign-up';
import { SignIn } from './sign-in';
import { PassRestore } from './pass-restore';

export class SideBar extends BaseComponent {
  private formWrapper: HTMLElement;

  private footerNote: HTMLElement;

  private signUp: SignUp;

  private signUpBtn: HTMLElement;

  private signIn: SignIn;

  private signInBtn: HTMLElement;

  private passRestore: PassRestore;

  private passRestoreBtn: HTMLElement;

  constructor() {
    super('aside', ['side-bar']);
    this.formWrapper = newElem('div', ['side-bar__form-wrapper']);
    this.footerNote = newElem('div', ['side-bar__footerNote']);

    this.signUpBtn = newElem('span', ['link-blue-underline'], 'Sign Up');
    this.signInBtn = newElem('span', ['link-blue-underline'], 'Sign In');
    this.passRestoreBtn = newElem(
      'span',
      ['link-blue-underline', 'forgot-pass'],
      'Forgot Password?',
    );

    this.signUp = new SignUp();
    this.signIn = new SignIn(this.passRestoreBtn);
    this.passRestore = new PassRestore(this.startSignIn.bind(this));

    this.signUpBtn.onclick = () => this.startSignUp();
    this.signInBtn.onclick = () => this.startSignIn();
    this.passRestoreBtn.onclick = () => this.startPassRestore();

    this.element.append(this.formWrapper, this.footerNote);

    this.startSignUp();
  }

  private startSignUp(): void {
    this.formWrapper.innerHTML = '';
    this.formWrapper.append(this.signUp.element);
    this.footerNote.innerHTML = '';
    this.footerNote.append('Already have an account?', this.signInBtn);
  }

  private startSignIn(): void {
    this.formWrapper.innerHTML = '';
    this.formWrapper.append(this.signIn.element);
    this.footerNote.innerHTML = '';
    this.footerNote.append("Don't have an account?", this.signUpBtn);
  }

  private startPassRestore(): void {
    this.formWrapper.innerHTML = '';
    this.formWrapper.append(this.passRestore.element);
    this.footerNote.innerHTML = '';
  }
}
