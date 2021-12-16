import React from 'react';

import StyledControlPanel from './styles/viewMainFieldControlPanel';
import StyledTitle from './styles/viewMainFieldControlTitle';

function ViewMainFieldControl(props: { title: string; children?: JSX.Element }): JSX.Element {
    const { title, children } = props;
    return (
        <StyledControlPanel>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledControlPanel>
    );
}
ViewMainFieldControl.defaultProps = {
    children: <></>,
};

export default ViewMainFieldControl;
