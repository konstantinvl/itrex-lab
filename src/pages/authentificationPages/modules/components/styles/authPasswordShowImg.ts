import styled from 'styled-components';

const StyledShowImg = styled.img`
    margin: 0;
    position: absolute;
    right: 16px;
    top: 16px;
    height: 24px;
    width: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;

    @media screen and (min-width: 0px) and (max-width: 561px) {
        right: calc(10% + 16px);
        top: 8px;
    }
`;

export default StyledShowImg;
