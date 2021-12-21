import styled from 'styled-components';

const StyledCardMenuButton = styled.div`
    border-radius: 6px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.2s;
    cursor: pointer;
    & * {
        cursor: pointer;
    }
    &:hover {
        background: #f9faff;
        & svg {
            & * {
                transition: all 0.3s;
                stroke: #7297ff;
            }
        }
    }
`;

export default StyledCardMenuButton;
