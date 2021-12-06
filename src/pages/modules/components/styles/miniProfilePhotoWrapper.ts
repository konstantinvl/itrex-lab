import styled from 'styled-components';

const StyledPhotoWrapper = styled.div`
    height: 40px;
    width: 40px;
    position: relative;
    & div {
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 2;
    }
`;

export default StyledPhotoWrapper;
