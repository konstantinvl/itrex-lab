import React from 'react';

import { useAppSelector } from '../../../services/store/hooks';
import Indicator from '../../../sharedComponents/roundIndicator';
import StyledMiniProfile from './styles/miniProfile';
import StyledInfoWrapper from './styles/miniProfileInfoWrapper';
import StyledName from './styles/miniProfileName';
import StyledPhoto from './styles/miniProfilePhoto';
import StyledPhotoWrapper from './styles/miniProfilePhotoWrapper';
import StyledStatus from './styles/miniProfileStatus';

function ProfileMini(): JSX.Element {
    const { user } = useAppSelector((state) => state);
    return (
        <StyledMiniProfile>
            <StyledInfoWrapper>
                <StyledName>{`${user.first_name} ${user.last_name}`}</StyledName>
                <StyledStatus>{user.role_name}</StyledStatus>
            </StyledInfoWrapper>
            <StyledPhotoWrapper>
                <StyledPhoto src={user.photo} />
                <Indicator color="#34C197" />
            </StyledPhotoWrapper>
        </StyledMiniProfile>
    );
}

export default ProfileMini;
