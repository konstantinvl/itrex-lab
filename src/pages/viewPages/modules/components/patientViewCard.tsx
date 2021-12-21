import React from 'react';
import { Appointment } from '../../../../services/interfaces';
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

function PatientViewCard(props: { info: Appointment }): JSX.Element {
    const { info } = props;
    return (
        <Card>
            <Overall>
                <OverallInfoWrapper>
                    <OverallPhoto src={info.doctor?.photo} alt="Avatar" />
                    <OverallInfo>
                        <OverallInfoName data-testid="name">{`${info.doctor?.first_name} ${info.doctor?.last_name}`}</OverallInfoName>
                        <OverallInfoAppointment>
                            {info.doctor?.specialization_name}
                        </OverallInfoAppointment>
                    </OverallInfo>
                </OverallInfoWrapper>
                <OverallMenu
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/menu-vertical.png)`,
                    }}
                />
            </Overall>
            <Details>
                <DetailsDate
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/clock-three.png)`,
                    }}
                >
                    {info.visit_date}
                </DetailsDate>
                <span
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/reason.png)`,
                    }}
                >
                    {info.reason}
                </span>
            </Details>
        </Card>
    );
}
export default PatientViewCard;
