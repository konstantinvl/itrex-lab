import styled from 'styled-components';

export const StyledMenuPopUp = styled.div`
    background: #ffffff;
    border-radius: 8px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    width: 272px;
    position: absolute;
    top: 44px;
    right: -10px;
    background: white;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.56);
    & div ~ div {
    }
`;

export const StyledMenuButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 15px;
    line-height: 140%;
    padding: 4px 20px;
    border-radius: 6px;
    color: #202225;
    min-height: 40px;
    &:hover {
        background: #f9faff;
    }
`;
