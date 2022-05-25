import React from 'react';
import NavBar from "../../Components/NavBar";
import './notification.css';
import Notification from './notific';

const NotificationPage = () => {
    return (
        <div className='App'>
        <div className='main'>
        <div className='mynavbar'>
            <NavBar></NavBar>
        </div>
            <Notification></Notification>
        </div>
      </div>
    );
};

export default NotificationPage;