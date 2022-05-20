import React from 'react';
import NavBar from "../../Components/NavBar";
import './message.css';

const MessagePage = () => {
    return (
        <div className='page'>
            <div className='mynavbar'>
                <NavBar/>
            </div>

            <div className='page__message'>

                <div className='header'>
                    <div className='message__title'>
                        <p>Message</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default MessagePage;