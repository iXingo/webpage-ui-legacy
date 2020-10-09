import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
