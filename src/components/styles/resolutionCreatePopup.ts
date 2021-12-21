import SelectLabel from 'pages/newAppointmentPage/modules/components/styles/appointmentSelectLabel';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Form } from 'formik';

export const StylledPopUpWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9000;
`;

export const StylledPopupWindow = styled(Form)`
    width: 560px;
    background: #ffffff;
    border-radius: 16px;
    z-index: 9100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledPopUpWindowInputs = styled.div`
    padding: 40px;
    width: 100%;
    min-height: 360px;
`;

export const StyledPopUpWindowControls = styled.div`
    border-top: 1px rgba(220, 224, 236, 0.5);
    width: 100%;
    min-height: 112px;
    padding: 32px 40px;
    background: #f9faff;
    border-radius: 0px 0px 16px 16px;
    display: flex;
    justify-content: space-between;
`;

export const StyledPopUpTitle = styled.label`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;

    display: flex;
    align-items: center;

    color: #202225;
`;

export const StyledPopUpUserName = styled.span`
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #202225;
    min-height: 24px;
    & svg {
        margin-right: 16px;
    }
`;

export const StyledPopUpTextareaLabel = styled(SelectLabel)`
    color: #a1abc9;
    margin-top: 24px;
`;

export const StyledTextAreaWrapper = styled.div`
    margin-top: 16px;
    min-width: 480px;
    min-height: 160px;
    padding: 4px;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border: 1px solid #dce0ec;
    display: flex;
    border-radius: 8px;
`;
export const StyledPopUpTextArea = styled.textarea`
    border: none;
    display: flex;
    flex: 1;
    resize: none;
    padding: 12px 20px;
    font-size: 15px;
    line-height: 140%;
    &:focus-visible {
        border: none;
        outline: 0px;
    }
    &::-webkit-scrollbar {
        width: 8px;
        background: ${rgba('#dce0ec', 0.32)};
        opacity: 0.32;
        border-radius: 8px;
        max-height: 97%;
        box-sizing: unset;
    }
    &::-webkit-scrollbar-thumb {
        background: ${rgba('#dce0ec', 0.56)};
        opacity: 0.56;
        border-radius: 8px;
    }
`;
