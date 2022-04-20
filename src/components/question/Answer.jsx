import React from 'react';
import LikePostBtn from "./LikePostBtn";
import UnlikePostBtn from "./UnlikePostBtn";
import './answer.css'

const Answer = (answer) => {
    return (
        <div className='answer'>
            {/*<div className='answer__author'>
                <div className='answer__author__logo'>
                    <img src={answer.logo}/>
                </div>
                <div className='answer__author__name'>
                    <p>{answer.name}</p>
                </div>
            </div>*/}
            <div className='answer__date'>
                Posted on {answer.date}
            </div>
            <div className='answer__text'>
                <p>
                    {answer.text}
                </p>
            </div>
            <div className='answer__stats'>
                <div className='like'>
                    <LikePostBtn/>
                    <div className='like__text'>
                        <p>{answer.like}</p>
                        <p>like</p>
                    </div>

                </div>
                <div className='unlike'>
                    <UnlikePostBtn/>
                    <div className='unlike__text'>
                        <p>{answer.unlike}</p>
                        <p>unlike</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Answer;