import React from 'react';
import styled from 'styled-components';

export const ControlPanel = styled.div`
    padding: 0px 32px 0px 48px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        padding: 0px 18px 0px 24px;
        height: 32px;
        display: flex;
        justify-content: space-between;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    color: #202225;
    height: 32px;
    display: flex;
    align-items: center;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        font-size: 20px;
        line-height: 24px;
    }
`;

function ViewMainFieldControl(props: { title: string }): JSX.Element {
    const { title } = props;
    return (
        <ControlPanel>
            <Title>{title}</Title>
        </ControlPanel>
    );
}

export default ViewMainFieldControl;
