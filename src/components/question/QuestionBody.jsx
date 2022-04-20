import React from 'react';
import './questionbody.css'
import LikePostBtn from "./LikePostBtn";
import UnlikePostBtn from "./UnlikePostBtn";
import SavePostBtn from "./SavePostBtn";
import SharePostBtn from "./SharePostBtn";
import looked from '../../icons/looked 1.svg'

const QuestionBody = (question) => {
    return (
        <div className='question'>
            <div className='question__date'>
                Posted on {question.date}
            </div>
            <div className='question__title'>
                {question.title}
            </div>

            <div className='question__text_body'>
                <p>{question.text}</p>
            </div>

            <div className='question__statistics'>
                <div className='looked_like_unlike'>
                    <div className='looked'>
                    <div className='looked__img'>
                        <img src={looked}
                            height="38"
                            width="38"
                        />
                    </div>
                    <div className='looked__text'>
                        <p>{question.looked}</p>
                        <p>view</p>
                    </div>
                </div>
                    <div className='like'>
                    <LikePostBtn/>
                    <div className='like__text'>
                        <p>{question.like}</p>
                        <p>like</p>
                    </div>
                </div>
                    <div className='unlike'>
                    <UnlikePostBtn/>
                    <div className='unlike__text'>
                        <p>{question.unlike}</p>
                        <p>unlike</p>
                    </div>
                </div>
                </div>

                <div className='save_share'>
                    <div className='unsave'>
                        <SavePostBtn />
                    </div>
                    <div className='share'>
                        <SharePostBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionBody;

