import React from 'react';
import './postbtn.css'
import unlike from '../../icons/unlike 1.svg'


const UnlikePostBtn = () => {
    function unlikePost() {

    }

    return (
        <div className='postbtn'>
            <button onClick={()=>unlikePost()}>
                <img src={unlike}
                     height="30"
                     width="30"/>
            </button>
        </div>
    );
};

export default UnlikePostBtn;