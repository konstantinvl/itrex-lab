import React from 'react';
import { useTitle } from 'react-use';
import { useAppSelector } from '../../services/store/hooks';
import DoctorsResolutionCard from './modules/components/doctorsResolutionCard';
import NoAppointmentDoctorsMessage from './modules/components/noAppointmentsDoctorsMessage';
import ResolutionHeader from './modules/components/resolutionsHeader';
import StyledViewMainFieldInfo from './modules/components/styles/viewMainFieldInfo';
import ViewMainFieldControl from './modules/components/viewMainFieldControls';

function ViewMainFieldDoctorResolutions(): JSX.Element {
    useTitle('Resolutions');
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
                        return <DoctorsResolutionCard key={info.id} info={info} />;
                    })
                ) : (
                    <NoAppointmentDoctorsMessage />
                )}
            </StyledViewMainFieldInfo>
        </>
    );
}

export default ViewMainFieldDoctorResolutions;
