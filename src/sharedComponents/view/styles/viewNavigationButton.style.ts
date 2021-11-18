import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ViewNavigationButton = styled(NavLink)`
    text-decoration: none;
    height: 40px;
    width: 160px;
    background: #ffffff;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
    font-size: 15px;
    line-height: 140%;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #7297ff;

    &.active {
        background: #7297ff;
        font-weight: 600;
        line-height: 130%;

        color: #ffffff;
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: 120px;
        &:not(::first-of-type) {
            margin-left: 24px;
        }
    }
`;

export default ViewNavigationButton;
