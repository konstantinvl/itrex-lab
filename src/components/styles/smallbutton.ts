import styled from 'styled-components';

const StyledSmallButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    border-radius: 8px;
    cursor: pointer;
    border: 0;
    & * {
        cursor: pointer;
    }

    & span {
        font-weight: 600;
        font-size: 15px;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: #ffffff;
    }
`;

export const StyledBlueSmallButton = styled(StyledSmallButton)`
    background: #7297ff;
    &:hover {
        background: #476cd3;
    }
`;

export const StyledGreySmallButton = styled(StyledSmallButton)`
    border: 1px solid #dce0ec;
    background: #ffffff;

    & span {
        color: #a1abc9;
    }
    & svg {
        & path {
            fill: #a1abc9;
        }
    }
    &:hover {
        background: #dce0ec;
        & span {
            color: #ffffff;
        }
        & svg {
            & path {
                fill: #ffffff;
            }
        }
    }
`;

export default StyledSmallButton;
