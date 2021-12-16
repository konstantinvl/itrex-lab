import styled from 'styled-components';

const StyledResolutionCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 4px;
    padding: 20px 24px 20px 40px;
    margin-top: 4px;
    min-height: 64px;

    & span {
        font-weight: normal;
        font-size: 17px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #202225;
        height: 24px;
    }
    & svg {
        z-index: 1;
    }
`;

export const StyledResolutionHeader = styled(StyledResolutionCard)`
    border-radius: 12px 12px 4px 4px;
    position: sticky;
    margin-top: 0px;
    top: 0px;
    background: white;
    z-index: 5;
    & span {
        color: #a1abc9;
    }
`;

export default StyledResolutionCard;
