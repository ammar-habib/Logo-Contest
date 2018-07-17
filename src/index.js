import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppRoute from './routes/route';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><AppRoute /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

console.log(process.env.REACT_APP_API_URI);