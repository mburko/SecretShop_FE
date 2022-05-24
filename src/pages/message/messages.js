import React from 'react'
import '../../styles/layot_massage.css'
import ListMessage from '../../Components/list_notification_massage'
import BlockMassage from '../../Components/block_massage'
function layot_massage() {
  return (
    <div className='main_layot_massage'>
      <div className='logo-massage'>
          <h1>Messange</h1>
        </div>
        <ListMessage></ListMessage>
        <div className='info-massage'>
          <BlockMassage></BlockMassage>
          <BlockMassage></BlockMassage>
          <BlockMassage></BlockMassage>
          <BlockMassage></BlockMassage>
        </div>
    </div>
  )
}

export default layot_massage
