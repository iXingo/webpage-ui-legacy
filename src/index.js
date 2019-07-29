import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();


ReactDOM.render(
    <Router history={browserHistory}>
        <App />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
