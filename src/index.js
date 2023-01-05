import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root')); 

//render all component inside root.render

root.render(
      <React.StrictMode>
        <Counter />
      </React.StrictMode>
    )
