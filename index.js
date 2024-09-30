import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoldCalculator from './Components/goldcalculator.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GoldCalculator />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();