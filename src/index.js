
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/font-awesome.min.css';
import './styles/linericon/style.css';
import './styles/theme.css';
import './styles/theme-responsive.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;
import AppRoute from './routes/route';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<BrowserRouter><AppRoute /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

console.log(process.env.REACT_APP_API_URI);