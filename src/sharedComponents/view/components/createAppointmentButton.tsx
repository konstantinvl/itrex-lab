import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../../../pages/modules/components/styles/blueButton';

function CreateAppointmentButton(): JSX.Element {
    const navigate = useNavigate();

    return (
        <BlueButton
            type="button"
            style={{
                marginTop: '0px',
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/plus.png)`,
                backgroundPosition: '16px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '48px',
            }}
            onClick={() => navigate('/view/newAppointment/')}
        >
            Create Appointment
        </BlueButton>
    );
}

export default CreateAppointmentButton;
