import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './components/app/app';
import { ThemeProvider } from './components/theme-provider/theme-provider';

import { store } from './store/index';
import { checkAuthAction } from './store/user-api-actions';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
