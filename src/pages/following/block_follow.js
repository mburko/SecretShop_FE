import React from 'react'
import './block_follows.css'
import logo_img from './Ellipse 3.png'
import Button from 'react-bootstrap/Button'

function block_follow(props) {
  return (
    <div className='main-follow'>
        <div className='main-block-follow'>
        <p className='p1-center'><img
        src={logo_img}
        height="45%"
        width="45%"
      /></p>

      <h6>Profile name</h6>
      <h6>200 question</h6>
      <h6>200 answer</h6>
      <p id='button-unfollow-following'><Button variant="light">Unfollow</Button></p>
      </div>
    </div>
  )
}

export default block_follow
