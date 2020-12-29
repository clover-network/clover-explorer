import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import ThemeProvider, { ThemedGlobalStyle } from './theme'
import App from './pages/App'
import store from './state'
import * as serviceWorker from './serviceWorker'

import './i18n';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
