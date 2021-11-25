import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import MainField from '../../../../sharedComponents/view/styles/viewMainField.style';
import {
    ControlPanel,
    Title,
} from '../../../../sharedComponents/view/components/viewMainFieldControls.Component';
import ViewMainFieldInfo from '../../../../sharedComponents/view/styles/viewMainFieldInfo.style';
import ViewNavigation from '../../../../sharedComponents/view/styles/viewNavigation.style';
import Ul from '../../../../sharedComponents/view/styles/viewNavigationUlLi.style';
import StyledSelect from '../../../../sharedComponents/inputSelect';
import StyledCalendar from '../styles/appointmentCalendar';
import FormPartTitle from '../styles/appointmentFormPartTitle';
import FormPartWrapper from '../styles/appointmentFormPartWrapper';
import StyledForm from '../styles/appointmentForm';
import InvisField from '../styles/invisField';
import RadioWrapper from '../styles/appointmentRadioWrapper';
import RadioLabel from '../styles/invisRadioLabel';
import SelectLabel from '../styles/appointmentSelectLabel';
import AppointmentInput from '../styles/appointmentInput';
import BlueButton from '../../../../sharedComponents/blueSubmitButton';
import InlineNav from '../../../../sharedComponents/inlineNavigation';

const AppointmentSchema = Yup.object().shape({
    occupation: Yup.string().required(),
    name: Yup.string().required(),
    reason: Yup.string().required(),
    note: Yup.string().max(50, 'Too long'),
    date: Yup.date().required(),
    time: Yup.string().required(),
});

const DoctorsOcupations = [
    { value: 'Therapist', label: 'Therapist' },
    { value: 'Surgeon', label: 'Surgeon' },
    { value: 'Therapist', label: 'Therapist' },
    { value: 'Surgeon', label: 'Surgeon' },
    { value: 'Therapist', label: 'Therapist' },
    { value: 'Surgeon', label: 'Surgeon' },
    { value: 'Therapist', label: 'Therapist' },
    { value: 'Surgeon', label: 'Surgeon' },
];
const DoctorsName = [
    { value: 'Lil Pump', label: 'Lil Pump' },
    { value: 'Lil John', label: 'Lil John' },
    { value: 'Lil Pump', label: 'Lil Pump' },
    { value: 'Lil John', label: 'Lil John' },
    { value: 'Lil Pump', label: 'Lil Pump' },
    { value: 'Lil John', label: 'Lil John' },
];
const FreeTime = [
    { time: '10:00 am', free: true },
    { time: '11:00 am', free: true },
    { time: '12:00 am', free: true },
    { time: '1:00 pm', free: true },
    { time: '2:00 am', free: false },
    { time: '3:00 am', free: true },
    { time: '4:00 am', free: false },
    { time: '5:00 am', free: true },
    { time: '6:00 am', free: true },
];

function PatientNewAppointment(): JSX.Element {
    return (
        <>
            <ViewNavigation>
                <Ul>
                    <li>
                        <InlineNav to="/view/patient/">Patient</InlineNav>
                    </li>
                    <li>
                        <InlineNav to="/view/newAppointment">
                            <div
                                style={{
                                    height: '24px',
                                    width: '24px',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/right.png)`,
                                    marginRight: '16px',
                                }}
                            />
                            Make an appointment
                        </InlineNav>
                    </li>
                </Ul>
            </ViewNavigation>

            <MainField>
                <ControlPanel>
                    <Title>Make an appointment</Title>
                </ControlPanel>
                <ViewMainFieldInfo>
                    <Formik
                        initialValues={{
                            occupation: '',
                            name: '',
                            reason: '',
                            note: '',
                            date: new Date(),
                            time: '',
                        }}
                        validationSchema={AppointmentSchema}
                        onSubmit={() => {}}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            setFieldValue,
                            setTouched,
                        }) => (
                            <StyledForm
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                            >
                                <FormPartWrapper style={{ width: '624px' }}>
                                    <FormPartTitle>
                                        <div>1</div>
                                        Select a doctor and define the reason of your visit
                                    </FormPartTitle>
                                    <SelectLabel>Occupation</SelectLabel>
                                    <StyledSelect
                                        onChange={(ev) => {
                                            const { value } = ev as { value: string };
                                            setTouched({ occupation: true, ...touched });
                                            setFieldValue('occupation', value);
                                        }}
                                        name="occupation"
                                        options={DoctorsOcupations}
                                        classNamePrefix="select"
                                        placeholder="Occupation"
                                    />
                                    <SelectLabel>Doctor`s name</SelectLabel>
                                    <StyledSelect
                                        onChange={(ev) => {
                                            const { value } = ev as { value: string };
                                            setTouched({ name: true, ...touched });
                                            return setFieldValue('name', value);
                                        }}
                                        name="name"
                                        options={DoctorsName}
                                        classNamePrefix="select"
                                        placeholder="Doctor`s name"
                                        isDisabled={!!errors.occupation || !touched.occupation}
                                    />
                                    <SelectLabel>Reason for the visit</SelectLabel>
                                    <AppointmentInput
                                        name="reason"
                                        value={values.reason}
                                        id="reason"
                                        onChange={handleChange}
                                        disabled={!!errors.name || !touched.name}
                                        placeholder="Reason for the visit"
                                    />
                                    <SelectLabel>Note</SelectLabel>
                                    <AppointmentInput
                                        name="note"
                                        value={values.note}
                                        disabled={!!errors.name || !touched.name}
                                        placeholder="Leave a note if needed"
                                    />
                                </FormPartWrapper>
                                <FormPartWrapper style={{ width: '400px' }}>
                                    <FormPartTitle>
                                        <div>2</div>
                                        Choose a day for an appointment
                                    </FormPartTitle>
                                    <StyledCalendar
                                        locale="en-En"
                                        onChange={(ev: Date) => {
                                            setFieldValue('date', ev);
                                            setTouched({ date: true, ...touched });
                                        }}
                                        next2Label={null}
                                        prev2Label={null}
                                        minDetail="month"
                                        minDate={
                                            errors.reason || !touched.reason
                                                ? new Date(1970, 1, 1)
                                                : new Date()
                                        }
                                        maxDate={
                                            errors.reason || !touched.reason
                                                ? new Date(1970, 1, 1)
                                                : new Date(3000, 1, 1)
                                        }
                                        formatShortWeekday={(locale: string, date: Date) =>
                                            new Intl.DateTimeFormat(locale, {
                                                weekday: 'long',
                                            }).format(new Date(date))[0]
                                        }
                                    />
                                </FormPartWrapper>
                                <FormPartWrapper style={{ width: '464px' }}>
                                    <FormPartTitle>
                                        <div>3</div>
                                        Select an available timeslot
                                    </FormPartTitle>
                                    <RadioWrapper
                                        role="group"
                                        disabled={!touched.date || !!errors.date}
                                    >
                                        {FreeTime.map((time) => {
                                            return (
                                                <>
                                                    <InvisField
                                                        type="radio"
                                                        id={time.time.split(' ').join('')}
                                                        name="time"
                                                        value={time.time}
                                                        disabled={!time.free}
                                                        onChange={handleChange}
                                                    />
                                                    <RadioLabel
                                                        htmlFor={time.time.split(' ').join('')}
                                                        tabIndex={0}
                                                    >
                                                        {time.time}
                                                    </RadioLabel>
                                                </>
                                            );
                                        })}
                                    </RadioWrapper>
                                    <BlueButton
                                        type="submit"
                                        style={{
                                            marginTop: '80px',
                                            padding: '16px 40px',
                                            alignSelf: 'flex-end',
                                            justifySelf: 'flex-end',
                                        }}
                                        disabled={
                                            !!errors.occupation ||
                                            !!errors.name ||
                                            !!errors.reason ||
                                            !!errors.date ||
                                            !!errors.time ||
                                            !touched.occupation ||
                                            !touched.name ||
                                            !touched.reason ||
                                            !touched.date
                                        }
                                    >
                                        Submit
                                    </BlueButton>
                                </FormPartWrapper>
                            </StyledForm>
                        )}
                    </Formik>
                </ViewMainFieldInfo>
            </MainField>
        </>
    );
}

export default PatientNewAppointment;
