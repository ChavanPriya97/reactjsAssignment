
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeadingComponent from './HeadingComponent';
import ClassComponent from './ClassComponent';

import ToUpperCase from './ToUpperCase';
const root = ReactDOM.createRoot(document.getElementById('root'));


const CurrentTime = () => {
  return <p> 
    {" "}
    {+new Date()} -- <ClassComponent title = "passed from current time" />
    {" "} 
    </p>
}   

//render all component inside root.render

root.render(
      <React.StrictMode>
        <ToUpperCase />
        <HeadingComponent
        title = "hello world from function component"
        count = "2"/>
        <CurrentTime />

        

      </React.StrictMode>
    )
