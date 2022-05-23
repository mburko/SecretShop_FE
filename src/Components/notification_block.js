import React from 'react'
import '../styles/notification_block.css'
import unsave1 from '../icons/unsave 1 (1).png'
import Button from 'react-bootstrap/Button'
function notification_block() {
  return (
    <div className='noti-block'>
      <div className='button-save-notification'>
      <div className='but-n'>
      <Button variant="outline-light">   <img
            src={unsave1}
            height="30"
            width="30"
          /></Button>
      </div>
      </div>
<div className='logo-noti-block'>
   Notification name
</div>
<div className='text-notification'>
Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details
</div>
    </div>
  )
}

export default notification_block
