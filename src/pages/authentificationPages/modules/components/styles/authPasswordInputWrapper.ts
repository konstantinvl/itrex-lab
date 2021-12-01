import styled from 'styled-components';

const StyledPasswordInputWrapper = styled.div`
    width: 368px;
    position: relative;
    margin-top: 40px;
    & label {
        position: absolute;
    }
    & input {
        margin-top: 0px;
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: 100%;
        position: relative;
        margin-top: 24px;
        margin-left: 0px;
        & input {
            margin-left: 10%;
            width: 80%;
        }
        & span {
            margin-left: 10%;
            width: 80%;
        }
    }
`;

export default StyledPasswordInputWrapper;
