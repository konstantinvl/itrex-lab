import { rgba } from 'polished';
import styled from 'styled-components';

const StyledViewMainFieldInfo = styled.div`
    padding: 0px 32px 0px 28px;
    margin-top: 8px;
    width: 100%;
    flex: 1;
    min-height: calc(100% - 70px);
    max-height: calc(100% - 70px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    overflow: auto;
    background-repeat: no-repeat;
    background-position: center;

    &::-webkit-scrollbar {
        margin-top: 24px;
        width: 12px;
        background: ${rgba('#dce0ec', 0.32)};
        opacity: 0.32;
        border-radius: 8px;
        max-height: 97%;
    }
    &::-webkit-scrollbar-thumb {
        background: ${rgba('#dce0ec', 0.56)};
        opacity: 0.56;
        border-radius: 8px;
    }
    @media screen and (min-width: 561px) and (max-width: 1067px) {
        margin-top: 18px;
        padding-right: 20px;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    @media screen and (min-width: 0px) and (max-width: 561px) {
        padding: 0px 18px 0px 24px;
        margin-top: 0px;
        min-height: calc(100% - 40px);
        max-height: calc(100% - 40px);
    }
`;

export default StyledViewMainFieldInfo;
