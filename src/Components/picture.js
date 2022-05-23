import React from 'react'
import pictures from '../icons/picture 1.png'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'

function picture() {
    return (
        <div className='button-search'>
            <Button variant="outline-dark">   <img
                src={pictures}
                height="28"
                width="25"
            /></Button>
        </div>
    )
}

export default picture
