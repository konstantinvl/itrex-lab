import styled from 'styled-components';

export const AppWrapper = styled.div`
    background-color: #e4ebff;
    padding: 0px 64px 48px 64px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    min-height: 100%;
    max-height: 100%;
    height: 100%;
`;
export const Header = styled.header`
    display: flex;
    flex: 1;
    max-height: 80px;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 0px) and (max-width: 561px) {
        min-height: 72px;
        max-height: 72px;
        align-items: center;
        justify-content: space-between;
        padding: 0px 24px;
    }
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #f9faff;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
    border-radius: 16px;
    padding: 40px 0px 0px 0px;
    overflow: hidden;
`;
