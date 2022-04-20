import React from 'react'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'
import like from '../icons/like 1 (1).png'

function likes() {
  return (
    <div>
      <div className='coments'>
            <div className='button-coment'>
            <Button variant="outline-light">   <img
            src={like}
            height="30"
            width="30"
          /></Button>
          </div>
            <div className='number-of-coments'>
                <p>53708 like</p>
            </div>
        </div>
    </div>
  )
}

export default likes
