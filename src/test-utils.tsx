/* eslint-disable react/display-name */
import { render as rtlRender, RenderOptions } from '@testing-library/react';
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
    // eslint-disable-next-line react/display-name
    // eslint-disable-next-line react/require-default-props
    ({ children }: { children?: React.ReactNode }) =>
        (
            <Provider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </Provider>
        );

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const render = (
    component: React.ReactElement,
    {
        initialState,
        store = configureStore<Partial<RootState>>([])(initialState),
        ...renderOptions
    }: ExtendedRenderOptions = {
        initialState: {},
    },
) => {
    return rtlRender(component, {
        wrapper: TestWrapper(store),
        ...renderOptions,
    });
};

export * from '@testing-library/react';
// override the built-in render with our own
export { render };
