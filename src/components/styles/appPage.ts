import styled from 'styled-components';

const AppPage = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #e4ebff;

    @media screen and (min-width: 0px) and (max-width: 561px) {
        flex-direction: column;
    }
`;

export default AppPage;
