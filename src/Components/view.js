import React from 'react'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'
import look from '../icons/looked 1.png'

function view() {
  return (
    <div>
      <div className='coments'>
        <div className='button-coment'>
          <Button variant="outline-light">   <img
            src={look}
            height="30"
            width="30"
          /></Button>
        </div>
        <div className='number-of-coments'>
          <p>53708 view</p>
        </div>
      </div>
    </div>
  )
}

export default view
