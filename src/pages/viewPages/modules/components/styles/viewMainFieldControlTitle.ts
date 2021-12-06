import styled from 'styled-components';

export const StyledTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    color: #202225;
    height: 32px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        font-size: 20px;
        line-height: 24px;
    }
`;

export default StyledTitle;
