import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./myanswer.css";
import NavBar from "../../Components/NavBar";
import Answer from "../../Components/MAquestion/Answer";
import FilterBy from "./FilterBy";
import Cookies from 'js-cookie';

const MyanswerPage = () => {
    const myId = 7;
    const myName = 'Anastasia';

    const [username, setUsername] = useState('');

    const [authorAnswer, setAuthorAnswer] = useState([]);
    useEffect(() => {
        getAuthorAnswer();
    }, []);

    const[jwt, setJwt] = useState('');
    useEffect(() => {
        login();
    }, []);

    function login(){
        axios.post('https://mydjangoapp21.herokuapp.com/api/login', {
            email: 'chaikovska@gmail.com',
            password: '1234'
        })
            .then(function (response) {
                console.log(response.data);
                setJwt(response.data.jwt_session);
            })
    };

    // function getCookie(name){
    //     const cookies = document.cookie.split(';');
    //     for (let i = 0; i < cookies.length; i++) {
    //         let c = cookies[i].trim().split('=');
    //         if (c[0] === name) {
    //             return c[1];
    //         }
    //     }
    //     return "";
    // }

    // function getCookies(){
    //     const decodedCookies = decodeURIComponent(document.cookie.split(';'));
    //     for (let i = 0; i < decodedCookies.length; i++) {
    //         let c = decodedCookies[i].trim().split('=');
    //         for (let j = 0; j < c.length; j++)
    //         {
    //             console.log(c[j]);
    //             if (c[j]==='jwt_session')
    //             {
    //                 return c[j+1];
    //             }
    //         }
    //     }
    //     return "";
    // }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                console.log('ret');
                console.log(c.substring(name.length, c.length));
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function getAuthorAnswer(){
        axios.get("https://mydjangoapp21.herokuapp.com/api/profile/", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data;
                console.log(response.data);
                console.log('authorAnswer.id');
                console.log(data.id);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    };


    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        getAnswers(myId);
        // getAnswers(authorAnswer.id);
    }, []);

    function getAnswers(authorId){
        axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+authorId)
            .then((response)=> {
                const data = response.data
                setAnswers(data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    }

    function filterByLikes(){
        // axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+authorAnswer.id+"&order_by=number_of_likes")
        axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+myId+"&order_by=number_of_likes")
            .then((response) => {
                const data = response.data
                setAnswers(data);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    }

    function filterByTime(){
        // axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+authorAnswer.id+"&order_by=date_of_publication")
        axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+myId+"&order_by=date_of_publication")
            .then((response) => {
                const data = response.data
                setAnswers(data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    }

    function filterByComments(){
        // axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+authorAnswer.id+"&order_by=number_of_comments")
        axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+myId+"&order_by=number_of_comments")
            .then((response) => {
                const data = response.data
                setAnswers(data)
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
                            <div className='myanswer__filter_by'>
                                <p>Filter by</p>
                                {/*<div className='vector'>*/}
                                {/*    <img src={vector}*/}
                                {/*         width="15"*/}
                                {/*         height="15"*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>
                            <div className='myanswer__filterby__button'>
                                <FilterBy onClick={filterByLikes}>Likes</FilterBy>
                            </div>

                            <div className='myanswer__filterby__button'>
                                <FilterBy onClick={filterByTime}>Time</FilterBy>
                            </div>

                            <div className='myanswer__filterby__button'>
                                <FilterBy onClick={filterByComments}>Comments</FilterBy>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='all_questions'>
                    {
                        answers.length === 0 ? <h3>You haven't answered yet</h3> :
                        answers.map(answer => <div className='myanswer'>
                            <Answer key={answer.id} answer_id={answer.id} author_answer_id={myId/*authorAnswer.id*/} author_answer_name={myName/*authorAnswer.username*/}
                                    question_id={answer.question_id} text_body={answer.text_body}
                                    date_of_publication={answer.date_of_publication} number_of_likes={answer.number_of_likes}
                                    number_of_dislikes={answer.number_of_dislikes}
                            />
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default MyanswerPage;