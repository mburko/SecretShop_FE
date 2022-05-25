import React, { Component, useEffect, useState } from 'react'
import './qa_page.css';
import LS from '../../Components/List';
import Block_qa from '../../Components/Question_Answer';
import H1 from '../../Components/h1'
import axios from 'axios';

const App = props =>  {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, []);

    function getQuestions() {
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions")
            .then((response) => {
                const data = response.data
                setQuestions(data)
                console.log(response.data);
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
        <div className='main'>
            <div className='info1'>
                <div className='info-list'>
                    <H1></H1>
                    <LS></LS>
                </div>

                <div className='block'>
                    
                    {
                  //     <div className='all_questions1'>
                  //     {
                  //         questions.length === 0 ? "You haven't answered yet" :
                  //             questions.map(question => <div className='block_question'>
                  //
                  //                     <Block_qa key={question.id} author_id={question.author_id} date_of_publication={question.date_of_publication} title={question.title}
                  //                               text_body={question.text_body} tags={question.tags} number_of_views={question.number_of_views}
                  //                               number_of_likes={question.number_of_likes} number_of_dislikes={question.number_of_dislikes} number_of_comments={question.number_of_comments}/>
                  //                 </div>
                  //             )
                  //     }
                  // </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
