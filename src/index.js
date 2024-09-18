import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, you can add your CSS file later

import App from './App';  // Make sure the App component exists or create it

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
