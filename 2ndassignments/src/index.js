import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <h1>Mobile Operating System</h1>
    <ul>
      <li>Android</li>
      <li>Blackberry</li>
      <li>IOS</li>
      <li>Windows</li>  
    </ul>
    <h1>Mobile Manufacturers</h1>
    <ul>
      <li>Samsung</li>
      <li>Apple</li>
      <li>MI</li>
      <li>HTC</li>
    </ul>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
