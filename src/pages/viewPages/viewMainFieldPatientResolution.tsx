import React from 'react';
import { useAppSelector } from '../../services/store/hooks';
import NoAppointmentDoctorsMessage from './modules/components/noAppointmentsDoctorsMessage';
import PatientsResolutionCard from './modules/components/patientResolutionCard';
import ResolutionHeader from './modules/components/resolutionsHeader';
import StyledViewMainFieldInfo from './modules/components/styles/viewMainFieldInfo';
import ViewMainFieldControl from './modules/components/viewMainFieldControls';

function ViewMainFieldPatientResolutions(): JSX.Element {
    const { resolutions } = useAppSelector((state) => state);
    return (
        <>
            <ViewMainFieldControl title="My Resolutions" />
            <StyledViewMainFieldInfo
                style={
                    resolutions.resolutions.length
                        ? { flexDirection: 'column', flexWrap: 'nowrap', marginTop: '32px' }
                        : { justifyContent: 'center', alignItems: 'center' }
                }
            >
                <ResolutionHeader />
                {resolutions.resolutions.length ? (
                    resolutions.resolutions.map((info) => {
                        return <PatientsResolutionCard key={info.id} info={info} />;
                    })
                ) : (
                    <NoAppointmentDoctorsMessage />
                )}
            </StyledViewMainFieldInfo>
        </>
    );
}

export default ViewMainFieldPatientResolutions;
