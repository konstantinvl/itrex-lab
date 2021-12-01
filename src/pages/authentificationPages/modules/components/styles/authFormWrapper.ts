import styled from 'styled-components';

const StyledFormWrapper = styled.div`
    display: flex;
    flex: 1;
    margin-left: 95px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        flex: unset;
        margin-left: unset;
    }
`;

export default StyledFormWrapper;
