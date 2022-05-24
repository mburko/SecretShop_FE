import React from 'react'
import '../styles/massage_block.css'
import circle from '../icons/Ellipse 1.png'
import Answer from '../Components/add_answer'
function block_massage() {
    return (
        <div className='block_main_massages'>

            <div className='logo logo-massages'>
                <div className='logo_img'>
                    <img
                        src={circle}
                        height="55"
                        width="55"
                    />
                </div>
                <div className='info-3'>
                    <div className='author_name'>
                        <p>Author username</p>
                    </div>
                    <div className='data'>

                        <p>Last online 12 Nov at 21:45</p>
                    </div>
                </div>
            </div>
            <div className='center-position'>
                <div>Messange Messange Messange Messange Messange Messange Messange Messange Messange Messange Messange Messange
                    Messange Messange Messange Messange Messange show more</div>
                <div className='answer-position'>
                    <Answer></Answer>
                </div>
            </div>
        </div>
    )
}

export default block_massage
