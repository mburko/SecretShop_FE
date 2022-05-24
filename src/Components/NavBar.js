import React from 'react'
import { FormControl, Navbar } from 'react-bootstrap'
import logo from '../icons/logo 1.png'
import search from '../icons/search 1 .png'
import answers from '../icons/answers 1.png'
import notification from '../icons/notifications 1.png'
import following from '../icons/following 1.png'
import message from '../icons/message 1.png'
import ellipse from '../icons/Ellipse 1.png'
import Button from 'react-bootstrap/Button'
import vector from '../icons/Vector 1.png'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBar.css';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className='Navbar'>
      <div className='info'>
        <div className='logo'>

          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              width="30"
            />
          </Navbar.Brand>
          <div className='logo_name'>
            <p>Logo_name</p>
          </div>
        </div>
        <div className='search'>
          <FormControl
            type='text'
            placeholder='Search'>

          </FormControl>
          <div className='button-search'>
            <Button variant="outline-dark">   <img
              src={search}
              height="28"
              width="25"
            /></Button>
          </div>

        </div>
        <Nav defaultActiveKey="/home" className="flex-column">
          <div className='link'>
            {/* <Link to="/">
              <img
                  src={logo}
                  height="30"
                  width="30"
              />Q&A</Link> */}

            <Nav.Link eventKey="link-1">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                />
                Q&A
              </Link> </Nav.Link>

          </div>
          <div className='link'>
            {/* <Link to="/myanswer">
              <img
                  src={answers}
                  height="30"
                  width="30"
              />
              My answers</Link> */}
            <Nav.Link eventKey="link-2">
              <Link to="/myanswer">
                <img
                  src={answers}
                  height="30"
                  width="30"
                />
                My answer</Link></Nav.Link>
          </div>
          <div className='link'>
            {/* <Link to="/notification">
              <img
                  src={notification}
                  height="30"
                  width="30"
              />
              Notification</Link> */}
            <Nav.Link eventKey="link-3">
            <Link to="/notification">
              <img
                src={notification}
                height="30"
                width="30"
              />
              Notification</Link></Nav.Link>
          </div>
          <div className='link'>
            {/* <Link to="/following">
              <img
                src={following}
                height="30"
                width="30"
              />
              Following</Link> */}
            <Nav.Link eventKey="link-4">
            <Link to="/following">
             <img
               src={following}
                height="30"
                width="30"
              />
             Following</Link> </Nav.Link>
          </div>
          <div className='link'>
            {/* <Link to="/message">
              <img
                src={message}
                height="30"
                width="30"
              />
              Message</Link> */}
            <Nav.Link eventKey="link-5">
            <Link to="/message">
             <img
               src={message}
                height="30"
                width="30"
              />
              Message</Link></Nav.Link>
          </div>
          <div className='position_navbar_botom'>
          <div className='button1 button_ask_question'>
            <Button variant="secondary">ASK QUESTION</Button>{' '}
          </div>
          <div className='profile'>
            <div className='profile_name'>
              <div className='img-profile'>
                <img
                  src={ellipse}
                  height="40"
                  width="40"
                  className='ellipse'
                />
              </div>
              <div className='name'>
                <p>Profile name</p>
              </div>
            </div>
            <div id='a1'>
              <img
                src={vector}
                height="20"
                width="20"
              />
            </div>
          </div>
          </div>
        </Nav>


      </div>


    </div>

  )
}

export default NavBar
