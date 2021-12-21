import MenuVerticalIcon from 'components/menuverticalIcon';
import React from 'react';
import { Resolution } from 'services/interfaces';
import StyledCardMenuButton from './styles/cardMenuButton';
import StyledResolutionCard from './styles/resolutionCard';

function PatientsResolutionCard(props: { info: Resolution }): JSX.Element {
    const { info } = props;

    return (
        <StyledResolutionCard>
            <span style={{ width: '10%' }}>{info.doctor?.first_name}</span>
            <span style={{ width: '10%' }}>{info.doctor?.last_name}</span>
            <span style={{ width: '30%' }}>{info.resolution}</span>
            <span style={{ width: '10%' }}>
                {new Date(info.visit_date).toLocaleDateString('En-en')}
            </span>
            <span style={{ width: '10%' }}>
                {new Date(info.next_appointment_date).toLocaleDateString('En-en')}
            </span>
            <StyledCardMenuButton>
                <MenuVerticalIcon />
            </StyledCardMenuButton>
        </StyledResolutionCard>
    );
}

export default PatientsResolutionCard;
