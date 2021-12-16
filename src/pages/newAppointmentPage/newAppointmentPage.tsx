import React from 'react';

import StyledControlPanel from 'pages/viewPages/modules/components/styles/viewMainFieldControlPanel';
import StyledTitle from 'pages/viewPages/modules/components/styles/viewMainFieldControlTitle';
import { getDoctorsBySpec, getFreeTime, getSpecializations } from 'services/axios/requests';
import NewAppointmentNavigation from './modules/newAppointmentNavigation';
import StyledMain from '../modules/components/styles/mainField';
import StyledViewMainFieldInfo from '../viewPages/modules/components/styles/viewMainFieldInfo';
import AppointmentFormik from './modules/newAppointmentFormik';

function PatientNewAppointment(): JSX.Element {
    return (
        <>
            <NewAppointmentNavigation />
            <StyledMain>
                <StyledControlPanel>
                    <StyledTitle>Make an appointment</StyledTitle>
                </StyledControlPanel>
                <StyledViewMainFieldInfo>
                    <AppointmentFormik
                        getDoctorsBySpec={getDoctorsBySpec}
                        getFreeTime={getFreeTime}
                        getSpecializations={getSpecializations}
                    />
                    {/* <Formik
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
                                                              // disabled={!time.free}
                                                              onChange={handleChange}
                                                              key={time}
                                                          />
                                                          <RadioLabel
                                                              htmlFor={time}
                                                              tabIndex={0}
                                                              key={`${time}label`}
                                                          >
                                                              {new Date(time).toLocaleTimeString(
                                                                  'en-EN',
                                                                  {
                                                                      hour12: true,
                                                                      hour: '2-digit',
                                                                      minute: '2-digit',
                                                                  },
                                                              )}
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
                    </Formik> */}
                </StyledViewMainFieldInfo>
            </StyledMain>
        </>
    );
}

export default PatientNewAppointment;
