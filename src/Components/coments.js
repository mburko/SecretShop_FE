import React from 'react'
import comment from '../icons/comment 1.png'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'

function coments() {
    return (
        <div className='coments'>
            <div className='button-coment'>
            <Button variant="outline-light">   <img
            src={comment}
            height="30"
            width="30"
          /></Button>
          </div>
            <div className='number-of-coments'>
                <p>53708 comments</p>
            </div>
        </div>
    )
}

export default coments
