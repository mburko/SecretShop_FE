import React from 'react'
import NavBar from '../../Components/NavBar'
import Follow1 from './Follow'
import './main_follow.css'

function following() {
  return (
    //<div className='App'>
      <div className='main'>
        <div className='mynavbar'>
          <NavBar></NavBar>
        </div>
          <Follow1/>
      </div>
    //</div>
  )
}

export default following