import React, {useState} from 'react';
import './myanswer.css'

import '../../components/question/questions.css'
import '../../components/question/questionbody.css'
import '../../components/question/answer.css'
import '../../components/question/author.css'

import NavBar from '../../components/NavBar/NavBar'
import vector from "../../icons/Vector 1.png";
import quests from '../../components/question/questions.json'
import questsbylikes from '../../components/question/questsbylikes.json'
import questsbytime from '../../components/question/questsbytime.json'
import questsbycomments from '../../components/question/questsbycomments.json'
import FilterBy from "./FilterBy";
import Author from "../../components/question/Author";
import author_logo from "../../icons/Ellipse 1.png";
import QuestionBody from "../../components/question/QuestionBody";
import Answer from "../../components/question/Answer";

const Myanswer = () => {
    const [questions, setQuestions] = useState(quests)

    function filterByLikes() {
        setQuestions(questsbylikes)
    }

    function filterByTime() {
        setQuestions(questsbytime)
    }

    function filterByComments() {
        setQuestions(questsbycomments)
    }

    function filterBySaves() {
        setQuestions(quests)  // !
    }

    return (
        <div className='page'>
            <div className='mynavbar'>
                <NavBar/>
            </div>
            <div className='page__myanswer'>

                <div className='header'>
                    <div className='myanswer__title'>
                        <p>My answer</p>
                    </div>

                    <div className='myanswer__filter'>
                        <div className='myanswer__filterby'>
                            <p>Filter by</p>
                            <div className='vector'>
                                <img src={vector}
                                     width="15"
                                     height="15"
                                />
                            </div>
                        </div>


                        <div className='filter__buttons'>
                            <div className='filter__button__like'>
                                <FilterBy onClick={filterByLikes}>Likes</FilterBy>
                            </div>
                            <div className='filter__button__time'>
                                <FilterBy onClick={filterByTime}>Time</FilterBy>
                            </div>
                            <div className='filter__button__comments'>
                                <FilterBy onClick={filterByComments}>Comments</FilterBy>
                            </div>
                            <div className='filter__button__saves'>
                                <FilterBy onClick={filterBySaves}>Saves</FilterBy>
                            </div>
                        </div>


                    </div>

                    <div className='all_questions'>
                        {
                            questions.map(quest =>
                                <div className='questions_answers'>
                                    <div className='question'>
                                        <div className='question__author'>
                                            <Author logo={author_logo} name={quest.authorname}/>
                                        </div>
                                        <div className='question__body'>
                                            <QuestionBody date={quest.questiondate} title={quest.questiontitle} text={quest.questiontext}
                                                          looked={quest.questionlooked} like={quest.questionlike} unlike={quest.questionunlike}
                                            />
                                        </div>
                                    </div>
                                    {
                                        quest.answers.map(answ =>
                                            <div className='answers'>
                                                <div className='answer__author'>
                                                    <Author logo={author_logo} name={answ.answername}/>
                                                </div>
                                                <div className='answer__body'>
                                                    <Answer date={answ.answerdate} text={answ.answertext}
                                                            like={answ.answerlike} unlike={answ.answerunlike}/>
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                            )
                        }
                    </div>

            </div>
        </div>
        </div>
    );
};

export default Myanswer;