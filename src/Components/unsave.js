import React from 'react'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'
import unsave1 from '../icons/unsave 1 (1).png'

function unsave() {
  return (
    <div>
       <div className='coments'>
            <div className='button-coment'>
            <Button variant="outline-light">   <img
            src={unsave1}
            height="30"
            width="30"
          /></Button>
          </div>
        </div>
    </div>
  )
}

export default unsave
