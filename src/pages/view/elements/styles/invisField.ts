import styled from 'styled-components';
import { Field } from 'formik';

const InvisField = styled(Field)`
    visibility: collapse;
    height: 0px;
    width: 0px;
    border: none;
    padding: 0;
    position: absolute;
    &:disabled + label {
        color: #f9faff;
        background: #dce0ec;
    }
    &:checked + label {
        border: 1px solid #7297ff;
        color: #7297ff;
    }
`;

export default InvisField;
