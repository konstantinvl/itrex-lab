import * as Yup from 'yup';

const AppointmentSchema = Yup.object().shape({
    occupation: Yup.string().required(),
    name: Yup.string().required(),
    reason: Yup.string().required(),
    note: Yup.string().max(50, 'Too long'),
    date: Yup.date().required(),
    time: Yup.string().required(),
});

export default AppointmentSchema;
