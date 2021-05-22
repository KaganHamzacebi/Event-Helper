import './index.css';
import App from './App';
import React from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import { hydrate, render } from "react-dom";
import { CookiesProvider } from 'react-cookie';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

ReactGA.initialize('UA-197548337-1');
TagManager.initialize({ gtmId: 'GTM-NJSM4BL' });
ReactGA.pageview(window.location.pathname + window.location.search);

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <CookiesProvider>
          <Router>
            {console.log('render')}
            <App />
          </Router>
        </CookiesProvider>
      </HelmetProvider>
    </React.StrictMode>,
    root
  );
}
else {
  render(
    <React.StrictMode>
      <HelmetProvider>
        <CookiesProvider>
          <Router>
            {console.log('render')}
            <App />
          </Router>
        </CookiesProvider>
      </HelmetProvider>
    </React.StrictMode>,
    root
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
