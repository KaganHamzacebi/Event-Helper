import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

ReactGA.initialize('UA-197548337-1');
TagManager.initialize('GTM-NJSM4BL');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.event({
  category: 'HOME_VISIT',
  action: 'VISIT',
  label: 'HOME'
});


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <CookiesProvider>
        <Router>
          <App />
        </Router>
      </CookiesProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
