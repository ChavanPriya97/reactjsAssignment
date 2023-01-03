import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ToUpperCase from './ToUpperCase';
const root = ReactDOM.createRoot(document.getElementById('root')); 

//render all component inside root.render

root.render(
      <React.StrictMode>
        <ToUpperCase />     
      </React.StrictMode>
    )
