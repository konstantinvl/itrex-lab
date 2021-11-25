import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { PatientViewAppointment } from '../../interfaces';

const Card = styled.div`
    height: 217px;
    width: 406px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 24px 0px 35px;

    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 12px;
    color: black;
    margin-top: 24px;
    margin-left: 20px;
    @media screen and (min-width: 561px) and (max-width: 1067px) {
        width: unset;
        flex: 1;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: unset;
        flex: 1;
        margin-top: 16px;
        margin-left: 0;
        height: 305px;
        //max-width: 100%;
        padding: 24px 0px 24px;
    }
`;

const Overall = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 72px;
    border-bottom: solid 1px ${rgba('#dce0ec', 0.5)};
    padding-bottom: 24px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        /* max-height: 72px; */
        //   padding-bottom: 5px;
        padding-bottom: 0;
    }
`;

const Details = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    padding: 0px 32px;
    & span {
        padding-left: 40px;
        font-size: 15px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #202225;
        background-position: 2px 2px;
        background-repeat: no-repeat;
        & ~ span {
            margin-top: 16px;
        }
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        padding: 0px 16px;
        & span {
            & ~ span {
                margin-top: 23px;
            }
        }
    }
`;

const OverallInfoWrapper = styled.div`
    display: flex;
`;
const OverallPhoto = styled.img`
    height: 48px;
    width: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    margin-left: 32px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-left: 24px;
    }
`;
const OverallInfo = styled.div`
    height: 48px;
    width: 229px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: unset;
    }
`;
const OverallInfoName = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
    color: #202225;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: -3px;
    }
`;
const OverallInfoAppointment = styled.div`
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: #a1abc9;
    & div {
        margin-right: 8px;
        border: 0;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        margin-top: 3px;

        &#text {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        & div {
            margin-top: 4px;
            min-width: 8px;
            margin-right: 8px;
        }
    }
`;

const OverallMenu = styled.div`
    flex: 1;
    background-position: center;
    background-repeat: no-repeat;
    max-width: 80px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        min-width: 54px;
        max-width: 54px;
        height: 48px;
    }
`;

const DetailsDate = styled.span`
    height: 24px;
    font-weight: 600;
    line-height: 130%;
`;

function PatientViewCard(props: { info: PatientViewAppointment }): JSX.Element {
    const { info } = props;
    return (
        <Card>
            <Overall>
                <OverallInfoWrapper>
                    <OverallPhoto
                        src={`${process.env.PUBLIC_URL}/images/avatars/${info.photo}`}
                        alt="Avatar"
                    />
                    <OverallInfo>
                        <OverallInfoName>{`${info.name} ${info.surname}`}</OverallInfoName>
                        <OverallInfoAppointment>{info.speciality}</OverallInfoAppointment>
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
                    {info.appointmentDate}
                </DetailsDate>
                <span
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/reason.png)`,
                    }}
                >
                    {info.simptoms}
                </span>
            </Details>
        </Card>
    );
}
export default PatientViewCard;
