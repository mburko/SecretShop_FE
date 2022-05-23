import React from 'react'
import { FormControl, Navbar } from 'react-bootstrap'
import '../styles/add_answer.css'

function add_answer() {
    return (
      
            <div className='answer'>
                <FormControl 
                    type='text'
                    placeholder='Add your answer'>

                </FormControl>
                
            </div>
     
    )
}

export default add_answer
