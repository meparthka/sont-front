import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom'
import './style/main.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
