import ResolutionCreatePopup from 'components/resolutionCreatePopup';
import React, { useState } from 'react';

import { appointmentCheck, indicatorColor } from 'services/utilities';

import ResolutionEditPopup from 'components/resolutionEditPopup';
import Indicator from '../../../../components/roundIndicator';
import { Appointment } from '../../../../services/interfaces';
import CardMenuButton from './cardMenuButton';
import {
    Card,
    Details,
    DetailsDate,
    Overall,
    OverallInfo,
    OverallInfoAppointment,
    OverallInfoName,
    OverallInfoWrapper,
    OverallMenu,
    OverallPhoto,
} from './styles/viewAppointmetnCard';

function DoctorViewCard(props: { info: Appointment }): JSX.Element {
    const { info } = props;

    const [showCreateResolution, setShowCreateResolution] = useState<boolean>(false);
    const [showEditResolution, setShowEditResolution] = useState<boolean>(false);
    const menuButtons: {
        text: string;
        closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
    }[] = [
        { text: 'Create a resoluton', closeFunc: setShowCreateResolution },
        { text: 'Edit a resoluton', closeFunc: setShowEditResolution },
        { text: 'Delete', closeFunc: setShowCreateResolution },
    ];

    return (
        <>
            <Card>
                <Overall>
                    <OverallInfoWrapper>
                        <OverallPhoto src={info.patient?.photo} alt="Avatar" />
                        <OverallInfo>
                            <OverallInfoName data-testid="name">{`${info.patient?.first_name} ${info.patient?.last_name}`}</OverallInfoName>
                            <OverallInfoAppointment>
                                <Indicator color={indicatorColor(info.status)} />
                                {appointmentCheck(info.status)}
                            </OverallInfoAppointment>
                        </OverallInfo>
                    </OverallInfoWrapper>
                    <OverallMenu>
                        <CardMenuButton menuButtons={menuButtons} />
                    </OverallMenu>
                </Overall>
                <Details>
                    <DetailsDate
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/clock-three.png)`,
                        }}
                    >
                        {new Date(info.visit_date).toLocaleDateString('En-en', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            hour12: true,
                        })}
                    </DetailsDate>
                    <span
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/clipboard-blank.png)`,
                        }}
                    >
                        {info.note}
                    </span>
                </Details>
            </Card>
            {showCreateResolution && (
                <ResolutionCreatePopup
                    firstName={info.patient?.first_name}
                    lastName={info.patient?.last_name}
                    appointmentID={info.id}
                    closeFunc={setShowCreateResolution}
                />
            )}
            {showEditResolution && (
                <ResolutionEditPopup
                    firstName={info.patient?.first_name}
                    lastName={info.patient?.last_name}
                    appointmentID={info.id}
                    closeFunc={setShowEditResolution}
                />
            )}
        </>
    );
}
export default DoctorViewCard;
