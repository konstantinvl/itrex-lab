import React from 'react';
import StyledViewNavigation from './components/styles/viewNavigation';
import StyledViewNavigationButton from './components/styles/viewNavigationButton';
import StyledNavigationList from './components/styles/viewNavigationList';

function ViewNavigation(props: { linkList: string[] }): JSX.Element {
    const { linkList } = props;
    return (
        <StyledViewNavigation>
            <StyledNavigationList>
                {linkList.map((link) => {
                    return (
                        <li key={link}>
                            <StyledViewNavigationButton to={`/view/doctor/${link.toLowerCase()}`}>
                                {link}
                            </StyledViewNavigationButton>
                        </li>
                    );
                })}
            </StyledNavigationList>
        </StyledViewNavigation>
    );
}

export default ViewNavigation;
