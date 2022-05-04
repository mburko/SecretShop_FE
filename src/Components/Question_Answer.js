import React from 'react'
import '../styles/QA.css'
import circle from '../icons/Ellipse 1.png'
import Coment from '../Components/coments'
import View from '../Components/view'
import Like from '../Components/likes'
import Unlike from '../Components/unlike'
import Unsave from '../Components/unsave'
import Share from '../Components/shape'
import Answer from '../Components/add_answer'

function Question_Answer() {
    return (
        <div className='main1'>
            <div className='question'>
                <div className='info2'>
                    <div className='logo'>
                        <div className='logo_img'>
                            <img
                                src={circle}
                                height="55"
                                width="55"
                            />
                        </div>
                        <div className='info-3'>
                            <div className='author_name'>
                                <p>Author name</p>
                            </div>
                            <div className='data'>
                                <p>Posted on .....</p>
                            </div>
                        </div>
                    </div>
                    <div className='question_n'>
                        <div className='name_question'>
                            <p>Question Question Question?</p>
                        </div>
                        <div className='text_question'>
                            <p>
                                Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details Details  Details Details Details Details Details  Details Details Details Details Details Details Details Details Details Details
                            </p>
                        </div>
                        <div className='statistic'>
                            <Coment></Coment>
                            <View></View>
                            <Like></Like>
                            <Unlike></Unlike>
                            <div className='side-buttoms'>
                                <Unsave></Unsave>
                                <Share></Share>
                            </div>
                        </div>
                        <div className='answer-text'>
                                <Answer></Answer>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question_Answer
