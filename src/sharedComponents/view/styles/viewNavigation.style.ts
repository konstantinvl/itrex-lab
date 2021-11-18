import styled from 'styled-components';

const ViewNavigation = styled.nav`
    margin: 0px 48px;
    flex: 1;
    min-height: 96px;
    max-height: 96px;
    display: flex;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin: 0px 24px;
        min-height: 80px;
        max-height: 80px;
    }
`;

export default ViewNavigation;
