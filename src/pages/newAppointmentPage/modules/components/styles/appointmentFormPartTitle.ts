import styled from 'styled-components';

const FormPartTitle = styled.span`
    width: 100%;
    min-height: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #a1abc9;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    & div {
        min-width: 32px;
        min-height: 32px;
        border: 1px solid #a1abc9;
        border-radius: 50%;
        margin-right: 16px;
        font-size: 17px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #a1abc9;
    }
`;

export default FormPartTitle;
