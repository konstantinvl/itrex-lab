import styled from 'styled-components';

const StyledNavigationList = styled.ul`
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & li {
        list-style: none;
        & ~ li {
            margin-left: 12px;
        }
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        & li {
            & ~ li {
                margin-left: 24px;
            }
        }
    }
`;

export default StyledNavigationList;
