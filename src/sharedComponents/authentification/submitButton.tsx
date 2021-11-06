import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    cursor: pointer;
    border: none;
    box-shadow: none;
    margin-top: 40px;
    margin-bottom: 32px;
    height: 56px;
    padding: 16px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #7297ff;
    border-radius: 8px;
    color: #ffffff;
    & span {
        font-weight: 600;
        line-height: 24px;
        display: flex;
        align-self: center;
    }
    & > * {
        cursor: pointer;
    }

    @media screen and (min-width: 0px) and (max-width: 561px) {
        width: unset;

        box-shadow: none;
        margin-top: 32px;
        height: 48px;
        padding: 12px 16px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        line-height: 19.5px;
        & span {
            display: flex;
            align-self: center;
            font-size: 15px;
        }
    }
`;

const Image = styled.img`
    margin-left: 8px;
`;

function SubmitButton(props: { text: string }): JSX.Element {
    const { text } = props;
    return (
        <Button type="submit">
            <span>{text}</span>
            <Image src={`${process.env.PUBLIC_URL}images/icons/angle-right-b.png`} alt={text} />
        </Button>
    );
}

export default SubmitButton;
