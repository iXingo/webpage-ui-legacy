import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();


ReactDOM.render(<App history={browserHistory}/>,
    document.getElementById('root')
);

registerServiceWorker();
