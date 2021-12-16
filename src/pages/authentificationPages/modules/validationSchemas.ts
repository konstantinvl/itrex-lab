import * as Yup from 'yup';

export const PassRestoreSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
});

export const SignInSchema = Yup.object().shape({
    userName: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .required('Please enter the password'),
});

export const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Should be at least 2 characters long')
        .max(50, `Shouldn't be more than 50 characters long`)
        .required('Please enter First Name'),
    lastname: Yup.string()
        .min(2, 'Should be at least 2 characters long')
        .max(50, `Shouldn't be more than 50 characters long`)
        .required('Please enter Last Name'),
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .required('Please enter the password'),
    confirmpassword: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please enter the password'),
});
