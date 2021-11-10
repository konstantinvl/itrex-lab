import styled from 'styled-components';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex: 1;
    margin-left: 95px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        flex: unset;
        margin-left: unset;
    }
`;
