import React from 'react';
import StyledErrorText from './styles/authErrorText';

function InputError(props: { text: string }): JSX.Element {
    const { text } = props;
    return (
        <StyledErrorText style={text !== '' ? { visibility: 'visible' } : {}}>
            {text}
        </StyledErrorText>
    );
}

export default InputError;
