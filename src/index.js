import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import UserRegistration from './UserRegistration';
import UserForm from './UserForm';


const root = ReactDOM.createRoot(document.getElementById('root')); 

//render all component inside root.render

root.render(
      <React.StrictMode>
        {/* <UserRegistration />   */}

        <UserForm />
      </React.StrictMode>
    )
