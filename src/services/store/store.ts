import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { appointmentsSlice } from './appointment/appointmentReduser';
import notificationReduser from './notification/notificationReduser';
import { resolutionsSlice } from './resolutions/resolutionReduser';
import mySaga from './sagas';
import { userSlice } from './user/userReduser';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        appointments: appointmentsSlice.reducer,
        notification: notificationReduser,
        resolutions: resolutionsSlice.reducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
