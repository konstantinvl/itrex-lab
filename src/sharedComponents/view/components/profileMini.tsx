import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Indicator from '../../roundIndicator';
import { setUser } from '../../../store/user/userActions';

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

const DOCTOR = {
    name: 'Miranda',
    surname: 'Nelson',
    status: 'Doctor',
    photo: `MIR-NEL-avatar.png`,
    online: true,
};
const PATIENT = {
    name: 'Miranda',
    surname: 'Nelson',
    status: 'Patient',
    photo: `MIR-NEL-avatar.png`,
    online: true,
};

function ProfileMini(): JSX.Element {
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Profile
            onClick={() => {
                dispatch(setUser(user.status === 'Doctor' ? PATIENT : DOCTOR));
                navigate('/view');
            }}
        >
            <InfoWrapper>
                <Name>{`${user.name} ${user.surname}`}</Name>
                <Status>{user.status}</Status>
            </InfoWrapper>
            <PhotoWrapper>
                <Photo src={`${process.env.PUBLIC_URL}/images/avatars/${user.photo}`} />
                <Indicator color={user.online ? '#34C197' : '#FF2567'} />
            </PhotoWrapper>
        </Profile>
    );
}

export default ProfileMini;
