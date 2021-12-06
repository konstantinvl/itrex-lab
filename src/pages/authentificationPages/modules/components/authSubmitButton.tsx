import React from 'react';
import StyledBlueSubmitButton from './styles/blueSubmitButton';

function SubmitButton(props: { text: string }): JSX.Element {
    const { text } = props;
    return (
        <StyledBlueSubmitButton type="submit" name="submit" data-testid="submit">
            <span>{text}</span>
            <img src={`${process.env.PUBLIC_URL}/images/icons/angle-right-b.png`} alt={text} />
        </StyledBlueSubmitButton>
    );
}

export default SubmitButton;
