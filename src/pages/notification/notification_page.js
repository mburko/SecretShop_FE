import React from 'react';
import NavBar from "../../Components/NavBar";
import './notification.css';

const NotificationPage = () => {
    return (
        <div className='page'>
            <div className='mynavbar'>
                <NavBar/>
            </div>

            <div className='page__notification'>

                <div className='header'>
                    <div className='notification__title'>
                        <p>Notification</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default NotificationPage;