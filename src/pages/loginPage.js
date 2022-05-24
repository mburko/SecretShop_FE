import React from 'react';
import '../styles/loginPage.css';
import { FormControl, Navbar } from 'react-bootstrap'
import logo from '../icons/logo 1.png'
import ukr from '../icons/ukr 1.png'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import community from '../icons/community 1.png'
import Form from 'react-bootstrap/Form'
import gmail from '../icons/gmail 1.png'
import facebook from '../icons/facebook 1.png'
const loginPage=()=> {
  return (
    <div className='main-loginPage'>
      <div className='logo-block'>
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
      <div className='buttons-line'>
        <div className='butoon1-line'>
          <Dropdown className='dropdown-button-languages'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
              <img
                src={ukr}
                height="20"
                width="20"
              /><span className='name-button-ukr'>UKR</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        <div className='button2-line'>
          <Button variant="success">Sign up</Button>{' '}
        </div>
      </div>
      <div className='info-loginPage'>
        <div className='img-loginPage'>
          <img
            src={community}
            height="400px"
            width="500px"
          />
        </div>
        <div className='login-block-page'>

          <p className='logo-page-login'>
            JOIN OUR COMMUNITY!
          </p>

          <div className='enter-emails'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label><span className='text-email-address'>Enter your email</span></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </div>

          <div className='enter-password'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><span className='text-email-address'>Enter your password</span></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </div>

          <div className='button-log-in'>
            <p className='center-buttom-log'><Button variant="success">Log in</Button>{' '}</p>
          </div>
<div className='or-or'>
<div className='hr1'></div><div>OR</div><div className='hr1'></div> 
</div>
<div className='line-gmail-facebook'>
<div className='emails-img'>
<img
            src={gmail}
            height="50"
            width="50"
          />
</div>
       <div className='facebook-img'>
       <img
            src={facebook}
            height="50"
            width="50"
          />
       </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default loginPage
