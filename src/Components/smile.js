import React from 'react'
import smile1 from '../icons/emoji 1.png'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'
function smile() {
    return (
        <div className='button-add-answer'>
            <div className='button-search'>
            <Button variant="outline-dark">   <img
                src={smile1}
                height="28"
                width="25"
            /></Button>
        </div>
        </div>
    )
}

export default smile
