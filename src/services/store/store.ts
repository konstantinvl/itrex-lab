import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { userSlice } from './user/userReduser';

import mySaga from './sagas';
import { appointmentsSlice } from './appointment/appointmentReduser';
// создаем мидлвар saga
const sagaMiddleware = createSagaMiddleware();
// монтируем его в хранилище

export const store = configureStore({
    reducer: { user: userSlice.reducer, appointments: appointmentsSlice.reducer },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
