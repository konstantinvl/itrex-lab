import { Field } from 'formik';
import styled from 'styled-components';

const AppointmentInput = styled(Field)`
    margin-top: 16px;
    background: #ffffff;
    width: 100%;
    height: 56px;
    padding: 24px 16px;
    border: 1px solid #dce0ec;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
    &:disabled {
        background: #dce0ec;
        color: #ffffff;
    }
`;

export default AppointmentInput;
