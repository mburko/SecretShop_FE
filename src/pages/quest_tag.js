import React, {useEffect, useState} from 'react';
import axios from "axios";
import Question from "../Components/MAquestion/Question";
import './myanswer/myanswer.css';

const QuestTag = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(()=> {
        getQuestions();
        }, [])

    function getQuestions()
    {
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions")
            .then((response) => {
                const data = response.data
                setQuestions(data)
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
        <div className='quest_tag'>
            {
                questions.length === 0 ? "You haven't answered yet" :
                    questions.map(question => <div className='MAquestion'>
                            <Question key={question.id} author_id={question.author_id} date_of_publication={question.date_of_publication} title={question.title}
                                      text_body={question.text_body} tags={question.tags} number_of_views={question.number_of_views}
                                      number_of_likes={question.number_of_likes} number_of_dislikes={question.number_of_dislikes}/>
                        </div>
                    )
            }
        </div>
    );
};

export default QuestTag;