import React from 'react'
import { FormControl, Navbar } from 'react-bootstrap'
import logo from '../../icons/logo 1.png'
import search from '../../icons/search 1 .png'
import answers from '../../icons/answers 1.png'
import notification from '../../icons/notifications 1.png'
import following from '../../icons/following 1.png'
import message from '../../icons/message 1.png'
import ellipse from '../../icons/Ellipse 1.png'
import Button from 'react-bootstrap/Button'
import vector from '../../icons/Vector 1.png'
import Nav from 'react-bootstrap/Nav'
import './navbar.css'


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
              <Nav.Link eventKey="link-1">
                <img
                    src={logo}
                    height="30"
                    width="30"
                />
                Q&A</Nav.Link>

            </div>
            <div className='link'>
              <Nav.Link eventKey="link-2">
                <img
                    src={answers}
                    height="30"
                    width="30"
                />
                My answer</Nav.Link>
            </div>
            <div className='link'>
              <Nav.Link eventKey="link-3">
                <img
                    src={notification}
                    height="30"
                    width="30"
                />
                Notification</Nav.Link>
            </div>
            <div className='link'>
              <Nav.Link eventKey="link-4">
                <img
                    src={following}
                    height="30"
                    width="30"
                />
                Following</Nav.Link>
            </div>
            <div className='link'>
              <Nav.Link eventKey="link-5">
                <img
                    src={message}
                    height="30"
                    width="30"
                />
                Message</Nav.Link>
            </div>
            <div className='button1'>
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
          </Nav>


        </div>


      </div>

  )
}

export default NavBar