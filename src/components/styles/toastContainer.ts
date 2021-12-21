import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const StyledToastContainer = styled(ToastContainer)`
    --toastify-toast-width: 457px;

    --toastify-color-error: #ff2567;
    --toastify-color-success: #34c197;
    .Toastify__toast-container--bottom-left {
        background: var(--toastify-color-error);
        padding: 0;
        bottom: 32px;
        left: 32px;
        min-width: 457px;
        min-height: 122px;
    }
    .Toastify__toast-container {
        min-width: 457px;
        min-height: 122px;
    }
    .Toastify__toast--error {
        background: var(--toastify-color-error);
    }
    .Toastify__toast--success {
        background: var(--toastify-color-success);
    }
    .Toastify__toast {
        min-width: 457px;
        min-height: 122px;
        padding: 24px 24px 24px 32px;
        filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
        border-radius: 12px;
    }
    .Toastify__toast-icon {
        width: 24px;
        height: 24px;
        & svg {
            width: 24px;
            height: 24px;
        }
    }
    .Toastify__close-button {
        width: 24px;
        height: 24px;
        & svg {
            width: 24px;
            height: 24px;
        }
    }
    .Toastify__toast-body {
        margin: 0;
        flex: 1;
        padding: 0;
        & > div {
            display: flex;
            height: 100%;
            justify-content: space-between;
        }
    }
`;

export default StyledToastContainer;
