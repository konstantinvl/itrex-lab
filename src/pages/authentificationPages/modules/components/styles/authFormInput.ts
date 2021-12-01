import styled from 'styled-components';
import { Field } from 'formik';

const StyledInput = styled(Field)`
    margin-top: 40px;
    color: #a1abc9;
    width: 368px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #dce0ec;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
    padding-left: 64px;
    padding-right: 45px;
    background-position: 24px;
    background-repeat: no-repeat;
    cursor: pointer;
    &:focus-visible {
        outline: none;
        filter: drop-shadow(4px 32px rgba(218, 228, 255, 0.16));
        border: 1px solid #7297ff;
        box-sizing: border-box;
        box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 10%;
        width: 80%;
        margin-top: 24px;
        height: 40px;
        font-size: 15px;
        padding-left: 48px;
        background-position: 16px;
        background-repeat: no-repeat;
        position: relative;
    }
`;

export default StyledInput;
