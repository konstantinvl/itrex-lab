import * as Yup from 'yup';

export const PassRestoreSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
});

export const SignInSchema = Yup.object().shape({
    userName: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        // .matches(
        //     /([0-9]+)([A-z]+)|([A-z]+)([0-9]+)/gm,
        //     'Should contain of at least 1 letter and 1 number',
        // )
        .required('Please enter the password'),
});

export const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Should be at least 2 characters long')
        .max(50, `Shouldn't be more than 50 characters long`),
    lasttname: Yup.string()
        .min(2, 'Should be at least 2 characters long')
        .max(50, `Shouldn't be more than 50 characters long`),
    email: Yup.string().email('Invalid email').required('Please enter the Email'),
    password: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .matches(
            /([0-9]+)([A-z]+)|([A-z]+)([0-9]+)/gm,
            'Should contain of at least 1 letter and 1 number',
        )
        .required('Please enter the password'),
    comfirmpassword: Yup.string()
        .min(6, 'Should be at least 6 characters long')
        .matches(
            /([0-9]+)([A-z]+)|([A-z]+)([0-9]+)/gm,
            'Should contain of at least 1 letter and 1 number',
        ),
    // .required('Please enter the password'),
});
