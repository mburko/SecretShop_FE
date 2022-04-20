import React from 'react';
import './postbtn.css'
import like from "../../icons/like 1.svg";

const LikePostBtn = () => {
    function likePost() {

    }

    return (
        <div className='postbtn'>
            <button onClick={()=>likePost()}>
                <img src={like}
                     height="30"
                     width="30"/>
            </button>
        </div>
    );
};

export default LikePostBtn;