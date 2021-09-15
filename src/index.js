import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LoginViews from './components/views/LoginView';
import reportWebVitals from './reportWebVitals';
import { ContactView } from './components/views/ContactView';

ReactDOM.render(
  <React.StrictMode>
    <LoginViews />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
