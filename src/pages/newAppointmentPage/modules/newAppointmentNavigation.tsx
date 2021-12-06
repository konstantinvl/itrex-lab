import StyledViewNavigation from 'pages/viewPages/modules/components/styles/viewNavigation';
import StyledNavigationList from 'pages/viewPages/modules/components/styles/viewNavigationList';

import React from 'react';
import { useAppSelector } from 'services/store/hooks';
import InlineNav from 'sharedComponents/inlineNavigation';

function NewAppointmentNavigation(): JSX.Element {
    const { user } = useAppSelector((state) => state);

    return (
        <StyledViewNavigation>
            <StyledNavigationList>
                <li>
                    <InlineNav to={`/view/${user.role_name.toLowerCase()}`}>
                        {user.role_name}
                    </InlineNav>
                </li>
                <li>
                    <InlineNav to="/view/newAppointment">
                        <div
                            style={{
                                height: '24px',
                                width: '24px',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/right.png)`,
                                marginRight: '16px',
                            }}
                        />
                        Make an appointment
                    </InlineNav>
                </li>
            </StyledNavigationList>
        </StyledViewNavigation>
    );
}

export default NewAppointmentNavigation;
