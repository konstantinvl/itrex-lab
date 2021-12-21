import styled from 'styled-components';
import BlueButton from '../../../../../components/styles/blueButton';

const StyledBlueSubmitButton = styled(BlueButton)`
    margin-top: 40px;
    & img {
        margin-left: 8px;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: 32px;
    }
`;

export default StyledBlueSubmitButton;
