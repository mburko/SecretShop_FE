import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './notification.css'
import BlockNoti from '../../Components/notification_block'
import ListNot from '../../Components/list_notification_massage'
function notification() {
 
  return (
    <div className='main-notification1'>
      <div className='main-notification'>
        <div className='logo-notification'>
          <h1>Notification</h1>
        </div>
       <ListNot></ListNot>
            
            <div className='block_info_notification'>
            <BlockNoti></BlockNoti>
            <BlockNoti></BlockNoti>
            <BlockNoti></BlockNoti>
            <BlockNoti></BlockNoti>
            <BlockNoti></BlockNoti>
            <BlockNoti></BlockNoti>
            </div>
        </div>
       
      </div>

  )
}

export default notification
