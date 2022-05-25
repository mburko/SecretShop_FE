import React, { Component, useEffect, useState } from 'react'
import '../styles/QA.css'
import circle from '../icons/Ellipse 1.png'
import Unsave from '../Components/unsave'
import Share from '../Components/shape'
import Answer from '../Components/add_answer'

import comment from '../icons/comment 1.png'
import '../styles/comment.css'
import Button from 'react-bootstrap/Button'
import look from '../icons/looked 1.png'
import like from '../icons/like 1 (1).png'
import inlikes from '../icons/unlike 1.png'
// import smile1 from '../icons/emoji 1.png'
import axios from 'axios'
// import React from 'react'

export default function Question_Answer(props) {

  const [author, setAuthor] = useState([]);
    useEffect(() => {
        console.log(props.author_id);
        getAuthor(props.author_id);
    }, []);
    function getAuthor(authorId) {
        axios.get("https://mydjangoapp21.herokuapp.com/api/users/"+authorId)
            .then((response)=> {
                const data = response.data
                setAuthor(data)
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
    <div className='main1'>
          
           <div className='question' >
             {/* id={posts[i].id} */}
               <div className='info2'>
                   <div className='logo'>
                     <div className='logo_img'>
                           <img
                                src={circle}
                                height="55"
                                width="55"
                            />
                        </div>
                        <div className='info-3'>
                            <div className='author_namess'>
                                <p>{author.username}</p>
                            </div>
                            <div className='data'>
                          
                              <p>Posted on { 
                             
                              new Date(props.date_of_publication).toLocaleString()
                              }
                              </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className='question_n'>
                        <div className='name_question'>
                            {
                                   <p>
                                       {
                                       props.title
                                     }
                                   </p>
                            }
                        </div>
                        <div className='text_question'>
                            <p>
                                {
                                  props.text_body
                                }
                            </p>
                        </div>
                        <div className='statistic'>
                        <div className='coments'>
                        {/* id={i} */}
                        <div className='button-coment'>
                            <Button variant="outline-light">   
                            <img
                                src={comment}
                                height="30"
                                width="30"
                            /></Button> 
                        </div>
                           <div className='number-of-coments'>
                            <div className='coments-number-position'>
                             <div>
                               {
                              //  posts[i].number_of_comments
                              props.number_of_comments
                               }</div> <div className='coments-number-position-left'>comments</div>
                            </div>
                          </div>
                        </div>
                        <div className='views'>
                       <div className='coments'>
                       <div className='button-coment'>
                       <Button variant="outline-light">   <img
                          src={look}
                          height="30"
                          width="30"
                        /></Button>
                      </div>
                      <div className='number-of-coments'>
                     <div className='coments-number-position'><div>{
                    //  posts[i].number_of_views
                    props.number_of_views
                     }</div><div className='coments-number-position-left'>view</div></div>
                      </div>
                      </div>
                      </div>
                      <div className='like_width'>
                      <div className='coments'>
                      <div className='button-coment'>
                      <Button variant="outline-light">   <img
                      src={like}
                      height="30"
                      width="30"
                      /></Button>
                      </div>
                      <div className='number-of-coments'>
                       <div className='coments-number-position'> <div>{
                      //  posts[i].number_of_likes
                      props.number_of_likes
                       }</div><div  className='coments-number-position-left'>like</div></div>
                        </div>
                        </div>
                        </div>
                        <div>
                          <div className='coments'>
                            <div className='button-coment'>
                              <Button variant="outline-light">   <img
                              src={inlikes}
                              height="30"
                              width="30"
                              /></Button>
                              </div>
                              <div className='number-of-coments'>
                               <div className='coments-number-position'> <div>{
                              //  posts[i].number_of_dislikes
                              props.number_of_dislikes
                               }</div> <div className='coments-number-position-left'>unlike</div></div>
                                </div>
                                </div>
                                </div>
                           <div className='side'>
                           <div className='side-buttoms'>
                                <Unsave></Unsave>
                                <Share></Share>
                            </div>
                           </div>
                        </div>
                        
                        {/* <div className='answer-block'> */}
                            
                        <div className='answer-text'>
                                <Answer></Answer>
                            </div>
                        
                    </div>
                </div>
            </div>
      </div>
  )
}

