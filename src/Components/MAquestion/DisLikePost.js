import React, {useEffect, useState} from 'react';
import axios from "axios";
import unlike from "../../icons/unlike 1.png";
import like from '../../icons/like 1 (1).png';
import './postbtn.css';

const DisLikePost = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    useEffect(() => {
        updateQuestionDislikes(props.id);
    }, []);

    useEffect(() => {
        updateAnswerDislikes(props.id);
    }, []);

    function likePost() {
        console.log('post id');
        console.log(props.id);
        console.log('user id');
        console.log(props.userid);

        axios({
            method: "POST",
            url: props.url,
            data: {
                reaction_type: 1,
                user: props.userid,
                question: props.id,
                answer: props.id
            }
        })
            .then((response) => {
            console.log('like response');
            console.log(response);
            console.log('like response data');
            console.log(response.data);
            console.log('like response status');
            console.log(response.status);
            if (response.status === 202 && props.post === 'question')
            {

                updateQuestionDislikes(props.id);
            }
            if (response.status === 202 && props.post === 'answer')
            {
                updateAnswerDislikes(props.id);
            }
        })
    }

    function dislikePost() {
        console.log('post id');
        console.log(props.id);
        console.log('user id');
        console.log(props.userid);

        axios({
            method: "POST",
            url: props.url,
            data: {
                reaction_type: 0,
                user: props.userid,
                question: props.id,
                answer: props.id
            }
        }).then((response) => {
            console.log('like response');
            console.log(response);
            console.log('like response data');
            console.log(response.data);
            console.log('like response status');
            console.log(response.status);
            if (response.status === 202 && props.post === 'question')
            {
                updateQuestionDislikes(props.id);
            }
            if (response.status === 202 && props.post === 'answer')
            {
                updateAnswerDislikes(props.id);
            }
        })
    }

    function updateQuestionDislikes(postId)
    {
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions/"+postId)
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

    function updateAnswerDislikes(postId)
    {
        axios.get("https://mydjangoapp21.herokuapp.com/api/answers/"+postId)
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
                <button onClick={()=>likePost()}>
                    <img src={like}
                         height="30"
                         width="30"/>
                </button>
                <div className='num'>{likes}</div>
                <div className='text'>likes</div>
            </div>
            <div className='postbtn__dislike'>
                <button onClick={()=>dislikePost()}>
                    <img src={unlike}
                         height="30"
                         width="30"/>
                </button>
                <div className='num'>{dislikes}</div>
                <div className='text'>dislikes</div>
            </div>
        </div>
    );
};

export default DisLikePost;