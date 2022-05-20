import React from 'react';
import './postbtn.css'
import unsave from "../../icons/unsave 1 (1).png";
import save from "../../icons/unsave 1.png";

const SavePostBtn = () => {
    function savePost() {
        {/*<img src={save} height="30" width="30"/>*/}
    }

    return (

        <div className='postbtn'>
            <button onClick={()=>savePost()}>
                <img src={unsave}
                    height="30"
                    width="30"/>
            </button>
        </div>
    );
};

export default SavePostBtn;