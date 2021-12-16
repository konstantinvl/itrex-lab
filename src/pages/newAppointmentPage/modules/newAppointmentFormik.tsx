import { Formik } from 'formik';
import BlueButton from 'pages/modules/components/styles/blueButton';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getDoctorsBySpec, getFreeTime, getSpecializations } from 'services/axios/requests';
import { DoctorBySpec, SpecializationData } from 'services/interfaces';
import { appointmentSetRequested } from 'services/store/appointment/appointmentActions';
import { useAppDispatch, useAppSelector } from 'services/store/hooks';
import StyledSelect from 'sharedComponents/inputSelect';
import StyledCalendar from './components/styles/appointmentCalendar';
import StyledForm from './components/styles/appointmentForm';
import FormPartTitle from './components/styles/appointmentFormPartTitle';
import FormPartWrapper from './components/styles/appointmentFormPartWrapper';
import AppointmentInput from './components/styles/appointmentInput';
import RadioWrapper from './components/styles/appointmentRadioWrapper';
import SelectLabel from './components/styles/appointmentSelectLabel';

import InvisField from './components/styles/invisField';
import RadioLabel from './components/styles/invisRadioLabel';
import AppointmentSchema from './validationSchema';

function AppointmentFormik(props: {
    getDoctorsBySpec: (spec: string) => Promise<DoctorBySpec[]>;
    getFreeTime: (date: string, doctorID: string) => Promise<string[]>;
    getSpecializations: () => Promise<SpecializationData[]>;
}): JSX.Element {
    const { getDoctorsBySpec, getFreeTime, getSpecializations } = props;
    const { user } = useAppSelector((state) => state);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [doctorSpec, setDoctorSpec] = useState<string>('');
    const [doctorsBySpec, setDoctorsBySpec] = useState<
        {
            value: string;
            label: string;
        }[]
    >([]);
    const [choosenDoctor, setChoosenDoctor] = useState<string>('');
    const [appDate, setAppDate] = useState<string>('');
    const [freeTimes, setFreeTimes] = useState<string[]>([]);

    async function loadSpecializations() {
        const specializations = await getSpecializations();
        return specializations.map((spec) => {
            return { value: spec.id, label: spec.specialization_name.toLocaleUpperCase('en-En') };
        });
    }

    async function loadDoctors() {
        if (doctorSpec) {
            const doctors = await getDoctorsBySpec(doctorSpec);
            setDoctorsBySpec(
                doctors.map((doctor) => {
                    return { value: doctor.id, label: `${doctor.first_name} ${doctor.last_name}` };
                }),
            );
        }
    }

    async function loadFreeTime() {
        if (appDate) {
            const freeTime = await getFreeTime(appDate, choosenDoctor);
            setFreeTimes(freeTime);
        }
    }

    useEffect(() => {
        loadDoctors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [doctorSpec]);

    useEffect(() => {
        loadFreeTime();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appDate]);

    return (
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
            onSubmit={(values) => {
                dispatch(
                    appointmentSetRequested(
                        {
                            date: values.date.toISOString(),
                            reason: values.reason,
                            note: values.note,
                            doctorID: values.name,
                        },
                        user.role_name,
                    ),
                );
                navigate('/view/');
            }}
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
                        <SelectLabel htmlFor="occupation">Occupation</SelectLabel>
                        <StyledSelect
                            onChange={(ev) => {
                                const { value } = ev as { value: string };
                                setTouched({ occupation: true, ...touched });
                                setFieldValue('occupation', value);
                                setDoctorSpec(value);
                            }}
                            name="occupation"
                            defaultOptions
                            loadOptions={() => loadSpecializations()}
                            classNamePrefix="select"
                            placeholder="Occupation"
                            data-testid="occupation"
                        />
                        <SelectLabel htmlFor="name">Doctor`s name</SelectLabel>
                        <StyledSelect
                            onChange={(ev) => {
                                const { value } = ev as { value: string };
                                setTouched({ name: true, ...touched });
                                setFieldValue('name', value);
                                setChoosenDoctor(value);
                            }}
                            name="name"
                            defaultOptions={doctorsBySpec}
                            classNamePrefix="select"
                            placeholder="Doctor`s name"
                            isDisabled={!!errors.occupation || !touched.occupation}
                            data-testid="name"
                        />
                        <SelectLabel htmlFor="reason">Reason for the visit</SelectLabel>
                        <AppointmentInput
                            name="reason"
                            value={values.reason}
                            id="reason"
                            onChange={handleChange}
                            disabled={!!errors.name || !touched.name}
                            placeholder="Reason for the visit"
                            data-testid="reason"
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
                            data-testid="calendar"
                            locale="en-En"
                            onChange={(ev: Date) => {
                                setFieldValue('date', ev);
                                setTouched({ date: true, ...touched });
                                setAppDate(ev.toISOString());
                            }}
                            next2Label={null}
                            prev2Label={null}
                            minDetail="month"
                            minDate={
                                errors.reason || !touched.reason ? new Date(1970, 1, 1) : new Date()
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
                            data-testid="radio"
                            role="group"
                            disabled={!touched.date || !!errors.date}
                        >
                            {freeTimes.length
                                ? freeTimes.map((time) => {
                                      return (
                                          <>
                                              <InvisField
                                                  type="radio"
                                                  id={time}
                                                  name="time"
                                                  value={time}
                                                  onChange={handleChange}
                                                  key={time}
                                              />
                                              <RadioLabel
                                                  htmlFor={time}
                                                  tabIndex={0}
                                                  key={`${time}label`}
                                              >
                                                  {new Date(time).toLocaleTimeString('en-EN', {
                                                      hour12: true,
                                                      hour: '2-digit',
                                                      minute: '2-digit',
                                                  })}
                                              </RadioLabel>
                                          </>
                                      );
                                  })
                                : 'No free time left. Please choise another date'}
                        </RadioWrapper>
                        <BlueButton
                            data-testid="submit"
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
    );
}

export default AppointmentFormik;
