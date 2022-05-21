import React from 'react';
import axios from "axios";
import views from "../../icons/looked 1.png"
import LikePostBtn from "./LikePostBtn";
import SavePostBtn from "./SavePostBtn";
import SharePostBtn from "./SharePostBtn";
import UnlikePostBtn from "./UnlikePostBtn";

const MAquestion = (question) => {
    return (
        <div className='MAquestion'>
            <div className='question'>
                <div className='question__date'>
                    Posted on {question.date_of_publication}
                </div>
                <div className='question__title'>
                    {question.title}
                </div>

                <div className='question__text_body'>
                    <p>{question.text_body}</p>
                </div>
                <div className='question__tags'>
                    {
                        question.tags.map(tag=><div className='tag'>
                                <p>{tag}</p>
                            </div>
                        )
                    }
                </div>

                <div className='question__statistics'>
                    <div className='looked_like_unlike'>
                        <div className='looked'>
                            <div className='looked__img'>
                                <img src={views}
                                     height="38"
                                     width="38"
                                />
                            </div>
                            <div className='looked__text'>
                                <p>{question.number_of_views}</p>
                                <p>view</p>
                            </div>
                        </div>
                        <div className='like'>
                            <LikePostBtn/>
                            <div className='like__text'>
                                <p>{question.number_of_likes}</p>
                                <p>like</p>
                            </div>
                        </div>
                        <div className='unlike'>
                            <UnlikePostBtn/>
                            <div className='unlike__text'>
                                <p>{question.number_of_dislikes}</p>
                                <p>dislike</p>
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

        </div>
    );
};

export default MAquestion;