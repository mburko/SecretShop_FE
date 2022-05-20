import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../../Components/NavBar";
import vector from "../../icons/Vector 1.png"
import "./myanswer.css";
import MAquestion from "../../Components/MAquestion/MAquestion";
import quests from "../../Components/MAquestion/quest.json";

function Myanswer2 ()  {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        getQuestions();
    }, [questions]);

    function getQuestions() {
        axios({
            method: "GET",
            headers: { 'Content-Type': 'application/json'},
            url:"https://mydjangoapp21.herokuapp.com/api/questions",
        }).then((response)=>{
            const data = response.data
            setQuestions(data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
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
                            {/*<div className='filter__button__like'>*/}
                            {/*    <FilterBy onClick={filterByLikes}>Likes</FilterBy>*/}
                            {/*</div>*/}
                            {/*<div className='filter__button__time'>*/}
                            {/*    <FilterBy onClick={filterByTime}>Time</FilterBy>*/}
                            {/*</div>*/}
                            {/*<div className='filter__button__comments'>*/}
                            {/*    <FilterBy onClick={filterByComments}>Comments</FilterBy>*/}
                            {/*</div>*/}
                            {/*<div className='filter__button__saves'>*/}
                            {/*    <FilterBy onClick={filterBySaves}>Saves</FilterBy>*/}
                            {/*</div>*/}
                        </div>

                    </div>
                    <div className='all_questions'>
                        {
                            questions.length === 0 ? "no questions" :
                            questions.map(quest => <div className='questions_answers'>
                                    <div className='question'>
                                        <MAquestion key={quest.id} question={quest} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Myanswer2;