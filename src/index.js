import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import configureStore from './shared/redux/configureStore';
import ThemeContext from './context/ThemeContext';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const store = configureStore(window.initialState);
const themes = {
  theme: 'light',
};

const renderApp = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeContext.Provider value={themes}>
        <Provider store={store}>
          <Router>
            <Component />
          </Router>
        </Provider>
      </ThemeContext.Provider>
    </React.StrictMode>,
    rootElement
  );
};

renderApp(AppRoutes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
