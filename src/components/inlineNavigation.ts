import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const InlineNav = styled(NavLink)`
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #7297ff;
    text-decoration: none;
    &.active {
        color: #a1abc9;
    }
`;

export default InlineNav;
