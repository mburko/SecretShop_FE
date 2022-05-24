import React, {useEffect, useState} from 'react';
import axios from "axios";
import like from "../../icons/like 1 (1).png";
import dislike from "../../icons/unlike 1.png";
import Cookies from "js-cookie";

const DisLikeQuestion = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    useEffect(() => {
        updateQuestionDislikes(props.id);
    }, []);

    function likeQuestion() {
        console.log('question id');
        console.log(props.id);
        console.log('user id');
        console.log(props.userid);

        axios({
            method: "POST",
            url: 'https://mydjangoapp21.herokuapp.com/api/question_react',
            data: {
                reaction_type: 1,
                user: props.userid,
                question: props.id
            },
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response) => {
                console.log('like response');
                console.log(response);
                console.log('like response data');
                console.log(response.data);
                console.log('like response status');
                console.log(response.status);
                if (response.status === 202)
                {
                    updateQuestionDislikes(props.id);
                }
            })
    }

    function dislikeQuestion() {
        console.log('question id');
        console.log(props.id);
        console.log('user id');
        console.log(props.userid);

        axios({
            method: "POST",
            url: 'https://mydjangoapp21.herokuapp.com/api/question_react',
            data: {
                reaction_type: 0,
                user: props.userid,
                question: props.id
            },
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        }).then((response) => {
            console.log('dislike response');
            console.log(response);
            console.log('dislike response data');
            console.log(response.data);
            console.log('dislike response status');
            console.log(response.status);
            if (response.status === 202)
            {
                updateQuestionDislikes(props.id);
            }
        })
    }

    function updateQuestionDislikes(questionId)
    {
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions/"+questionId, {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data_likes = response.data.number_of_likes;
                const data_dislikes = response.data.number_of_dislikes;
                setLikes(data_likes);
                setDislikes(data_dislikes);
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
        <div className='postbtn'>
            <div className='postbtn__like'>
                <button onClick={()=>likeQuestion()}>
                    <img src={like}
                         height="30"
                         width="30"/>
                </button>
                <div className='num'>{likes}</div>
                <div className='text'>likes</div>
            </div>

            <div className='postbtn__dislike'>
                <button onClick={()=>dislikeQuestion()}>
                    <img src={dislike}
                         height="30"
                         width="30"/>
                </button>
                <div className='num'>{dislikes}</div>
                <div className='text'>dislikes</div>
            </div>
        </div>
    );
};

export default DisLikeQuestion;