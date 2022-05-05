import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
