import styled from 'styled-components';

const Indicator = styled.div.attrs((props) => ({ color: props.color }))`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    border: 3px solid #e3ebff;
    box-sizing: unset;
    background-color: ${(props) => props.color};
`;

export default Indicator;
