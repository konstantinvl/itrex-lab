import React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../../services/store/hooks';
import Indicator from '../../roundIndicator';

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    width: 208px;
    /* @media screen and (min-width: 0px) and (max-width: 561px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 40px;
        width: 208px;
    } */
`;
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: flex-end;
    width: 152px;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        height: 0;
        width: 0;
        overflow: hidden;
    }
`;
const Name = styled.span`
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    color: #202225;
`;
const Status = styled.span`
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    color: #a1abc9;
`;
const PhotoWrapper = styled.div`
    height: 40px;
    width: 40px;
    position: relative;
    & div {
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 2;
    }
`;
const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 1;
`;

function ProfileMini(): JSX.Element {
    const { user } = useAppSelector((state) => state);
    return (
        <Profile>
            <InfoWrapper>
                <Name>{`${user.first_name} ${user.last_name}`}</Name>
                <Status>{user.role_name}</Status>
            </InfoWrapper>
            <PhotoWrapper>
                <Photo src={user.photo} />
                <Indicator color="#34C197" />
            </PhotoWrapper>
        </Profile>
    );
}

export default ProfileMini;
