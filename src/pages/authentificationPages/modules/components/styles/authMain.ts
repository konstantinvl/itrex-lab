import styled from 'styled-components';

const StyledMainAuth = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background-image: url(${process.env.PUBLIC_URL}/images/bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: 100%;
        min-height: 100px;
        max-height: 100px;
        padding: 0;
    }
`;

export default StyledMainAuth;
