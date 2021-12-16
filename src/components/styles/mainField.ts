import styled from 'styled-components';

const StyledMain = styled.div`
    margin-right: 16px;
    flex: 1;
    max-height: calc(100% - 96px);
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-right: 6px;

        flex: 1;
        max-height: calc(100% - 80px);
    }
`;

export default StyledMain;
