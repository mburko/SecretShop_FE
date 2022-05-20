import React, {useEffect, useState} from 'react';
import views from "../../icons/looked 1.png";
import SavePostBtn from "./SavePostBtn";
import SharePostBtn from "./SharePostBtn";
import "./question.css";
import '../../pages/myanswer/myanswer.css';
import axios from "axios";
import Tag from "./Tag";
import DisLikePost from "./DisLikePost";
import DisLikeQuestion from "./DisLikeQuestion";

const Question = (props) => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        getAuthor(props.author_id);
    }, []);

    function getAuthor(authorId) {
        axios.get("https://mydjangoapp21.herokuapp.com/api/users/"+authorId)
            .then((response)=> {
                const data = response.data;
                setAuthor(data);
                // console.log(response.data);
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
        <div className='maquestion'>
            <div className='question__author'>
                <div className='question__author__name'>
                    {author.username}
                </div>
            </div>
            <div className='question__date'>
                Posted on {new Date(props.date_of_publication).toLocaleDateString()}
            </div>
            <div className='question__title'>
                {props.title}
            </div>

            <div className='question__text_body'>
                <p>{props.text_body}</p>
            </div>

            <div className='question__tags'>
                {
                    //props.tags.length === 0 ? " no tags " :
                        props.tags.map(tag =><div className='tag'>
                            <Tag tag_id={tag} />
                        </div>)
                }
            </div>

            <div className='question__statistics'>
                <div className='looked_like_unlike'>
                    <div className='looked'>
                        <div className='looked__img'>
                            <img src={views}
                                 height="38"
                                 width="38"
                            />
                        </div>
                        <div className='looked__num'>
                            {props.number_of_views}
                        </div>
                        <div className='looked__text'>
                            view
                        </div>
                    </div>
                    <div className='like_dislike'>
                        <DisLikeQuestion id={props.question_id} userid={author.id}
                                         likes={props.number_of_likes} dislikes={props.number_of_dislikes}/>
                        {/*<DisLikePost post='question' id={props.question_id} url='https://mydjangoapp21.herokuapp.com/api/question_react'*/}
                        {/*             userid={author.id} likes={props.number_of_likes} dislikes={props.number_of_dislikes}/>*/}
                    </div>
                </div>

                <div className='save_share'>
                    <div className='unsave'>
                        <SavePostBtn />
                    </div>
                    <div className='share'>
                        <SharePostBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;