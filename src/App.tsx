import StyledToastContainer from 'components/styles/toastContainer';
import ToastMessage from 'components/toastMessage';
import React, { useEffect } from 'react';
import { useTitle } from 'react-use';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AlertIcon from 'components/alertIcon';
import AppPage from 'components/styles/appPage';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationState } from 'services/interfaces';
import { NotificationType } from 'components/enums';
import SuccessIcon from 'components/successIcon';
import { useAppSelector } from './services/store/hooks';
import View from './routes/viewRoute';
import AuthentificationPage from './routes/authentificationRoute';

function App(): JSX.Element {
    const { user, notification } = useAppSelector((state) => state);

    const navigation = useNavigate();

    function sendToast(message: NotificationState): React.ReactText {
        switch (message.type) {
            case NotificationType.SUCCESS:
                return toast.success(<ToastMessage notification={message} />, {
                    icon: <SuccessIcon />,
                });
            case NotificationType.ERROR:
                return toast.error(<ToastMessage notification={message} />, {
                    icon: <AlertIcon />,
                });
            default:
                return 'No Notification';
        }
    }

    useEffect(() => {
        navigation('/');
    }, [user]);

    useEffect(() => {
        sendToast(notification);
    }, [notification]);

    useTitle('Palm Clinic');

    return (
        <>
            <AppPage>
                <Routes>
                    <Route path="/auth/*" element={<AuthentificationPage />} />
                    <Route path="/view/*" element={<View />} />
                    <Route path="/" element={<Navigate to={user.id ? '/view/' : '/auth/'} />} />
                </Routes>
            </AppPage>
            <StyledToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </>
    );
}

export default App;
