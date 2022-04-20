import React from 'react';
import share from '../../icons/share 1.svg'
import './postbtn.css'

const SharePostBtn = () => {
    function sharePost() {

    }
    return (
        <div className='postbtn'>
            <button onClick={()=>sharePost()}>
                <img src={share}
                     height="30"
                     width="30"/>
            </button>
        </div>
    );
};

export default SharePostBtn;