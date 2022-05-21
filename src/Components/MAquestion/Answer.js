import React, {useEffect, useState} from 'react';
import axios from "axios";
import Question from "./Question";
import './question.css';
import './answer.css';
import DisLikePost from "./DisLikePost";
import DisLikeAnswer from "./DisLikeAnswer";

const Answer = (props) => {
    const [question, setQuestion] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getQuestion(props.question_id);
    }, []);

    function getQuestion(questionId) {
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions/"+questionId)
            .then((response)=> {
                const data = response.data
                setQuestion(data)
                setTags(response.data.tags);
                //console.log('tags')
                //console.log(response.data.tags);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    }

    return (
        <div className="question_answer">
            <div className="MAquestion">
                <Question key={question.id} question_id={question.id} author_id={question.author_id} date_of_publication={question.date_of_publication} title={question.title}
                          text_body={question.text_body} tags={tags} number_of_views={question.number_of_views}
                          number_of_likes={question.number_of_likes} number_of_dislikes={question.number_of_dislikes}/>
                <div className="MAanswer">
                    <div className="answer__author">
                        {props.author_answer_name}
                    </div>
                    <div className='answer__date'>
                        Posted on {new Date(props.date_of_publication).toLocaleDateString()}
                    </div>
                    <div className='answer__text_body'>
                        <p>{props.text_body}</p>
                    </div>
                    <div className='looked_like_unlike'>
                        <DisLikeAnswer id={props.answer_id} userid={props.author_answer_id}
                                       likes={props.number_of_likes} dislikes={props.number_of_dislikes}/>
                        {/*<DisLikePost post='answer' id={props.answer_id} url='https://mydjangoapp21.herokuapp.com/api/answer_react'*/}
                        {/*             userid={props.author_answer_id} likes={props.number_of_likes} dislikes={props.number_of_dislikes}/>*/}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Answer;