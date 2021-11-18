import React from 'react';
import styled from 'styled-components';
import BlueButton from '../blueSubmitButton';

const Image = styled.img`
    margin-left: 8px;
`;

function SubmitButton(props: { text: string }): JSX.Element {
    const { text } = props;
    return (
        <BlueButton type="submit">
            <span>{text}</span>
            <Image src={`${process.env.PUBLIC_URL}/images/icons/angle-right-b.png`} alt={text} />
        </BlueButton>
    );
}

export default SubmitButton;
