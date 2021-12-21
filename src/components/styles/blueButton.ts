import styled from 'styled-components';

const BlueButton = styled.button`
    cursor: pointer;
    border: none;
    box-shadow: none;
    width: fit-content;
    height: 56px;
    padding: 16px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #7297ff;
    border-radius: 8px;
    color: #ffffff;
    &:disabled {
        background-color: #dce0ec;
        &:hover {
            background-color: #dce0ec;
        }
    }

    &:hover {
        background: #476cd3;
    }
    & span {
        font-weight: 600;
        line-height: 24px;
        display: flex;
        align-self: center;
    }
    & > * {
        cursor: pointer;
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: unset;
        margin-left: 10%;
        box-shadow: none;
        height: 48px;
        padding: 12px 16px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        line-height: 19.5px;
        & span {
            display: flex;
            align-self: center;
            font-size: 15px;
        }
    }
`;

export default BlueButton;
