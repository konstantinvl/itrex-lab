import styled from 'styled-components';

const StyledToastWrapper = styled.div`
    position: absolute;
    height: 74px;
    width: 330px;
    display: flex;
    flex-direction: column;
    & span ~ span {
        margin-top: 8px;
    }
`;

export default StyledToastWrapper;
