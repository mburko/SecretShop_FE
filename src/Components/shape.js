import React from 'react'
import share from '../icons/share 1 (1).png'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'

function shape() {
  return (
    <div>
    <div className='coments'>
         <div className='button-coment'>
         <Button variant="outline-light">   <img
         src={share}
         height="30"
         width="30"
       /></Button>
       </div>
     </div>
 </div>
  )
}

export default shape
