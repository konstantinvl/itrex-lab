import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { render } from 'test-utils';
import SignInFormik from './signInFormik';

describe('Sign In Form', () => {
    it('show errors on empty input submit', async () => {
        const { getByTestId, getAllByTestId } = render(<SignInFormik />);
        const submitBtn = getByTestId('submit');
        fireEvent.click(submitBtn);
        const errors = getAllByTestId('input-error');
        await waitFor(() => expect(errors.length === 2));
    });

    it('show no errors', async () => {
        const { getByLabelText, getAllByTestId } = render(<SignInFormik />);

        const email = getByLabelText('email');
        const password = getByLabelText('password');

        fireEvent.change(email, 'fooofooo@fooo.com');
        fireEvent.change(password, '123qwerty123');
        const errors = getAllByTestId('input-error');
        await waitFor(() => expect(errors.length === 0));
    });
});
