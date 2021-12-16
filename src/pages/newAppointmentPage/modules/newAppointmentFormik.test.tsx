import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { render } from 'test-utils';
import { DoctorBySpec, SpecializationData } from 'services/interfaces';
import AppointmentFormik from './newAppointmentFormik';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getDoctorsBySpec(_spec: string): Promise<DoctorBySpec[]> {
    return [
        { first_name: 'FN1', last_name: 'LN1', id: '1' },
        { first_name: 'FN2', last_name: 'LN2', id: '2' },
    ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getFreeTime(date: string, doctorID: string): Promise<string[]> {
    return ['2021-11-23T13:00:00.000Z', '2021-11-23T14:00:00.000Z'];
}

async function getSpecializations(): Promise<SpecializationData[]> {
    return [
        {
            specialization_name: 'therapist',
            id: '1',
        },
        {
            specialization_name: 'surgeon',
            id: '2',
        },
    ];
}

describe('Sign In Form', () => {
    it('submit button is disabled', async () => {
        const { getByTestId } = render(
            <AppointmentFormik
                getDoctorsBySpec={getDoctorsBySpec}
                getFreeTime={getFreeTime}
                getSpecializations={getSpecializations}
            />,
        );
        const submitBtn = getByTestId('submit');
        fireEvent.click(submitBtn);
        await waitFor(() => expect(submitBtn).toBeDisabled());
    });
});
