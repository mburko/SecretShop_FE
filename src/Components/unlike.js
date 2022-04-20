import React from 'react'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'
import inlikes from '../icons/unlike 1.png'
function unlike() {
  return (
    <div>
       <div className='coments'>
            <div className='button-coment'>
            <Button variant="outline-light">   <img
            src={inlikes}
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

export default unlike
