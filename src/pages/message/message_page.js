import React from 'react';
import NavBar from "../../Components/NavBar";
import './message.css';
import Messages from './messages'

const MessagePage = () => {
    return (
        <div className='App'>
        <div className='main'>
        <div className='mynavbar'><NavBar></NavBar></div>
  <Messages></Messages>
        </div>
      </div>
    );
};

export default MessagePage;