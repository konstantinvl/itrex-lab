import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { render } from 'test-utils';
import SignUpFormik from './signUpFormik';

describe('Sign Up Form', () => {
    it('show errors on empty input submit', async () => {
        const { getByTestId, getAllByTestId } = render(<SignUpFormik />);
        const submitBtn = getByTestId('submit');
        fireEvent.click(submitBtn);
        const errors = getAllByTestId('input-error');
        await waitFor(() => expect(errors.length === 5));
    });

    it('show error on password confirmation', async () => {
        const { getByLabelText, getAllByTestId } = render(<SignUpFormik />);

        const password = getByLabelText('password');
        const confirmPassword = getByLabelText('confirmpassword');

        fireEvent.change(password, '123qwerty123');
        fireEvent.blur(confirmPassword);

        const errors = getAllByTestId('input-error');
        await waitFor(() => expect(errors.length === 1));
    });

    it('show no errors', async () => {
        const { getByLabelText, getAllByTestId } = render(<SignUpFormik />);

        const firstname = getByLabelText('firstname');
        const lastname = getByLabelText('lastname');
        const email = getByLabelText('email');
        const password = getByLabelText('password');
        const confirmPassword = getByLabelText('confirmpassword');

        fireEvent.change(firstname, 'firstname');
        fireEvent.change(lastname, 'lastname');
        fireEvent.change(email, 'fooofooo@fooo.com');
        fireEvent.change(password, '123qwerty123');
        fireEvent.change(confirmPassword, '123qwerty123');

        const errors = getAllByTestId('input-error');
        await waitFor(() => expect(errors.length === 0));
    });
});
