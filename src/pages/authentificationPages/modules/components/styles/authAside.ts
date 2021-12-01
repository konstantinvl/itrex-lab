import styled from 'styled-components';

const StyledAsideAuth = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 560px;
    height: 100%;
    min-height: 100%;
    background: #f4f7ff;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: -28px;
        width: 100%;
        border-radius: 24px 24px 0px 0px;
        height: 100%;
        min-height: 568px;
        justify-content: space-between;
    }
`;

export default StyledAsideAuth;
