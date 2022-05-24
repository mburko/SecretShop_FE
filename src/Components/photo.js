import React from 'react'
import photo1 from '../icons/photo 1.png'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'

function photo() {
    return (
       <div className='photo-button'>
            <div className='button-search'>
            <Button variant="outline-dark">   <img
            src={photo1}
            height="28"
            width="25"
          /></Button>
        </div>
       </div>
    )
}

export default photo
