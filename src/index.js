import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from "react-router-dom";


const browserHistory = createBrowserHistory();

ReactDOM.render(<App history={browserHistory}/>,
    document.getElementById('root')
);

registerServiceWorker();
