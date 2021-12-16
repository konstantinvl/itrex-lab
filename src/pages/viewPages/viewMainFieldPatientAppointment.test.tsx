import React from 'react';
import { render } from 'test-utils';
import ViewMainFieldPatientAppointment from './viewMainFieldPatientAppointment';

describe('Doctors view appointments', () => {
    it('should render appointments', () => {
        const appointments = {
            appointments: [
                {
                    id: 'testappointment1',
                    reason: 'testappointment1',
                    note: 'testappointment1',
                    patient_id: 'testappointment1',
                    doctor_id: 'testappointment1',
                    visit_date: 'testappointment1',
                    status: 'testappointment1',
                    doctor: {
                        last_name: 'testappointment1',
                        first_name: 'testappointment1',
                        id: 'testappointment1',
                        photo: 'testappointment1',
                        specialization_name: 'string',
                    },
                },
                {
                    id: 'testappointment2',
                    reason: 'testappointment2',
                    note: 'testappointment2',
                    patient_id: 'testappointment2',
                    doctor_id: 'testappointment2',
                    visit_date: 'testappointment2',
                    status: 'testappointment2',
                    doctor: {
                        last_name: 'name2',
                        first_name: 'name2',
                        id: 'testappointment2',
                        photo: 'testappointment2',
                        specialization_name: 'string',
                    },
                },
            ],
            total: 2,
        };

        const { getAllByTestId } = render(<ViewMainFieldPatientAppointment />, {
            initialState: { appointments },
        });

        const test = getAllByTestId('name').map((el) => el.textContent);

        expect(test).toMatchSnapshot(`
            Array [
                "testappointment1 testappointment1",
                "name2 name2"
            ]
        `);
    });

    it('should render no appointments message', () => {
        const appointments = {
            appointments: [],
            total: 0,
        };

        const { getAllByTestId } = render(<ViewMainFieldPatientAppointment />, {
            initialState: { appointments },
        });
        const test = getAllByTestId('no-appointments');
        expect(test.length);
    });
});
