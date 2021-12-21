import React from 'react';
import { StyledResolutionHeader } from './styles/resolutionCard';

function ResolutionHeader(): JSX.Element {
    return (
        <StyledResolutionHeader>
            <span style={{ width: '10%' }}>First Name</span>
            <span style={{ width: '10%' }}>Last Name</span>
            <span style={{ width: '30%' }}>Resolution</span>
            <span style={{ width: '10%' }}>Visit Date</span>
            <span style={{ width: '10%' }}>Next Visit</span>
            <span style={{ width: '40px', justifyContent: 'flex-end' }}>Actions</span>
        </StyledResolutionHeader>
    );
}

export default ResolutionHeader;
