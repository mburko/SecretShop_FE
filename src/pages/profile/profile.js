import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar";
import './profile.css';
import log_out from '../../icons/logout 1.svg';
import ellipse from '../../icons/Ellipse 1.png';
import edit from '../../icons/edit 1.svg';
import axios from "axios";
import Cookies from "js-cookie";
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";

const Profile = () => {
    const [profile, setProfile] = [{
        username: "Profile name",
        phone: '+380988989898',
        email: "email@gmail.com",
        question: "200",
        answer: "200",
        follower: "20",
        following: "200"
    }];

    let navigate = useNavigate();

    const [authorAnswer, setAuthorAnswer] = useState([]);
    useEffect(() => {
        getAuthor();
    }, []);

    function getAuthor(){
        // axios.defaults.withCredentials = true;
        // loginme();
        axios.get("https://mydjangoapp21.herokuapp.com/api/profile/", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data;
                setAuthorAnswer(data);
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

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        console.log('document.cookie');
        console.log(document.cookie);
    }
    function logout(){
        setCookie('jwt_session', '', 1);
        //document.cookie = "jwt_session= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        navigate("/login");
    }

    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        getAnswers(authorAnswer.id);
    }, [authorAnswer]);
    function getAnswers(authorId){
        axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+authorId, {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data
                console.log('getAnswers')
                console.log(response.data)
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

    const [questions, setquestions] = useState([]);
    useEffect(() => {
        getQuestions(authorAnswer.id);
    }, [authorAnswer]);
    function getQuestions(authorId){
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions?author="+authorId, {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data
                console.log('getAnswers')
                console.log(response.data)
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

    const [follower, setFollower] = useState([]);
    const [following, setFollowing] = useState([]);
    useEffect(() => {
        getFollow(authorAnswer.id);
    }, [authorAnswer]);
    function getFollow()
    {
        // followed
        axios.get("https://mydjangoapp21.herokuapp.com/api/myfollow/"+authorAnswer.id+"/follow_type=0", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data;
                setFollower(data);
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
        // following
        axios.get("https://mydjangoapp21.herokuapp.com/api/myfollow/"+authorAnswer.id+"/follow_type=1", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data;
                setFollowing(data);
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
    }

    return (
        <div className='page'>
            <div className='mynavbar'>
                <NavBar/>
            </div>

            <div className='page__profile'>

                <div className='header'>
                    <div className='profile__title'>
                        <p>Profile</p>
                    </div>
                </div>

                <div className='profile__body'>
                    <div className='profile__logo__log_out'>
                        <div className='profile__logo'>
                            <img
                                src={ellipse}
                                height="100%"
                                width="100%"
                            />
                        </div>
                        <div className='log_out__button'>
                            <button onClick={logout}> <img
                                src={log_out}
                                height="15%"
                                width="15%" />
                                Log out</button>
                        </div>

                    </div>
                    <div className='profile__info'>
                        <div className='profile__name__edit'>
                            <div className='username'>
                                {authorAnswer.username}
                            </div>
                            <div className='edit'>
                                <button>
                                    <img
                                        src={edit}
                                        height="80%"
                                        width="80%"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className='profile__number'>
                            {profile.phone}
                        </div>
                        <div className='profile__email'>
                            {authorAnswer.email}
                        </div>
                        <div className='profile__statistic'>
                            <div className='pr_statistic'>
                                <div className='statistic__num'>
                                    {questions.length}
                                </div>
                                <div className='statistic__text'>
                                    question
                                </div>
                            </div>
                            <div className='pr_statistic'>
                                <div className='statistic__num'>
                                    {answers.length}
                                </div>
                                <div className='statistic__text'>
                                    answer
                                </div>
                            </div>
                            <div className='pr_statistic'>
                                <div className='statistic__num'>
                                    {follower.length}
                                </div>
                                <div className='statistic__text'>
                                    follower
                                </div>
                            </div>
                            <div className='pr_statistic'>
                                <div className='statistic__num'>
                                    {following.length}
                                </div>
                                <div className='statistic__text'>
                                    following
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;