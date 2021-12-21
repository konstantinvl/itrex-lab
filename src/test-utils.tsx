/* eslint-disable react/display-name */
/* eslint-disable react/require-default-props */
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import { RootState } from 'services/store/store';

interface ExtendedRenderOptions extends RenderOptions {
    initialState: Partial<RootState>;
    store?: Store<Partial<RootState>>;
}

const TestWrapper =
    (store: Store) =>
    ({ children }: { children?: React.ReactNode }) =>
        (
            <Provider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </Provider>
        );

const render = (
    component: React.ReactElement,
    {
        initialState,
        store = configureStore<Partial<RootState>>([])(initialState),
        ...renderOptions
    }: ExtendedRenderOptions = {
        initialState: {},
    },
): RenderResult => {
    return rtlRender(component, {
        wrapper: TestWrapper(store),
        ...renderOptions,
    });
};

export * from '@testing-library/react';

export { render };
