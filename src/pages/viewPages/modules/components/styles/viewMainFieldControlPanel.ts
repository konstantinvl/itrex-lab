import styled from 'styled-components';

export const StyledControlPanel = styled.div`
    padding: 0px 32px 0px 48px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        padding: 0px 18px 0px 24px;
        height: 32px;
        display: flex;
        justify-content: space-between;
    }
`;

export default StyledControlPanel;
