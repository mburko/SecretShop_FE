import React from 'react'
import Nav from 'react-bootstrap/Nav'
function list_notification_massage() {
  return (
    <div>
      <div className='list' id='list-notification'> <Nav>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">Unread</Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">Read</Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">Save</Nav.Link>
                </Nav.Item>
        
            </Nav></div>
    </div>
  )
}

export default list_notification_massage
