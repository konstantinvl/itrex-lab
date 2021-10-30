import { BaseComponent } from "../../base-component";
import "../../../assets/styles/main.scss";
import { newElem } from "../../../shared/newElem";
import { Data } from "../../../shared/interfaces";
import { PatientCard } from "./patientCard";
import { CANCELED, CONFIRMED, WAITING } from "../../../shared/constants";

const DATA: Data = {
  patients: {
    title: "Patients",
    patients: [
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: CONFIRMED,
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: CANCELED,
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: WAITING,
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      {
        name: "Jane",
        surname: "Cooper",
        photo: "./images/JAN-COO-avatar.png",
        appointment: "CONFIRMED",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        prescription:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
    ],
  },
  resolutions: {
    title: "Resolutions",
    patients: [],
  },
};

export class Main extends BaseComponent {
  private top: HTMLElement;

  private view: HTMLElement;
  private viewTop: HTMLElement;
  private viewInfoField: HTMLElement;

  private title: HTMLElement;
  private patientsButton: HTMLElement;
  private resolutionsButton: HTMLElement;

  // private noPatientMessage:HTMLElement;

  constructor() {
    super("main", ["app__app__main"]);
    this.top = newElem("div", ["app__app__main__top"]);
    this.patientsButton = newElem(
      "div",
      ["app__app__main__top__button"],
      "Patients"
    );
    this.resolutionsButton = newElem(
      "div",
      ["app__app__main__top__button"],
      "Resolutions"
    );
    this.top.append(this.patientsButton, this.resolutionsButton);

    this.view = newElem("div", ["app__app__main__view"]);
    this.viewTop = newElem("div", ["app__app__main__view__top"]);
    this.viewInfoField = newElem("div", ["app__app__main__view__info-field"]);
    this.title = newElem("div", ["app__app__main__view__top__title"]);
    this.viewTop.append(this.title);
    this.view.append(this.viewTop, this.viewInfoField);

    this.element.append(this.top, this.view);

    this.showPatients();
  }

  private showPatients(): void {
    this.viewInfoField.innerHTML = "";
    this.title.innerHTML = "My Patients";
    this.viewInfoField.classList.remove("empty");
    this.patientsButton.classList.add("active");
    if (DATA.patients.patients?.length) {
      DATA.patients.patients?.forEach((patient) => {
        const patientNew = new PatientCard(patient);
        this.viewInfoField.append(patientNew.element);
      });
    } else {
      this.viewInfoField.classList.add("empty");
      this.viewInfoField.append(this.noPatientMessage());
    }
  }

  private showResolutions(): void {}

  private noPatientMessage(): HTMLElement {
    const historyImage = newElem("div", [
      "app__app__main__view__info-field__message__image",
    ]);
    historyImage.style.backgroundImage = "url(./images/medical-history.png)";
    const lineFirst = newElem(
      "span",
      ["app__app__main__view__info-field__message__text"],
      `You have no patients yet`
    );
    const lineSecond = newElem(
      "span",
      ["app__app__main__view__info-field__message__text"],
      `To create a patient profile, please contact your administrator.`
    );

    const message = newElem("div", [
      "app__app__main__view__info-field__message",
    ]);
    message.append(historyImage, lineFirst, lineSecond);
    return message;
  }
}
