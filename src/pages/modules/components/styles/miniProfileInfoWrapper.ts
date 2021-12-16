import styled from 'styled-components';

const StyledInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: flex-end;
    width: 152px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        height: 0;
        width: 0;
        overflow: hidden;
    }
`;

export default StyledInfoWrapper;
