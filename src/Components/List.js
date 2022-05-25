import React, {useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../styles/List.css';
import Button from 'react-bootstrap/Button'
import axios from "axios";
import Cookies from "js-cookie";
import Block_qa from "./Question_Answer";
import '../pages/qa/qa_page.css';

function List() {
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

    function filterByLikes(){
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions?order_by=number_of_likes", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response) => {
                const data = response.data
                setQuestions(data);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    }

    function filterByViews(){
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions?order_by=number_of_views", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            // axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+myId+"&order_by=date_of_publication")
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

    function filterByComments(){
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions?order_by=number_of_comments", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            // axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+myId+"&order_by=number_of_comments")
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

    function filterByDislikes(){
        axios.get("https://mydjangoapp21.herokuapp.com/api/questions?order_by=number_of_dislikes", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            // axios.get("https://mydjangoapp21.herokuapp.com/api/answers?author_id="+myId+"&order_by=date_of_publication")
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

    // useEffect(() => {
    //     getMyQuestion(question.author_id);
    // }, []);
    //
    // function getMyQuestion(questionId) {
    //     axios.get("https://mydjangoapp21.herokuapp.com/api/questions/"+questionId, {
    //         headers:{
    //             "Authorization": Cookies.get("jwt_session"),
    //         }
    //     })
    //         .then((response)=> {
    //             const data = response.data
    //             setQuestion(data)
    //             //setTags(response.data.tags);
    //             //console.log('tags')
    //             //console.log(response.data.tags);
    //         })
    //         .catch((error) => {
    //             if (error.response) {
    //                 console.log(error.response);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             }
    //         })
    // }

    return (
        <div>
           <div className='list'> <Nav>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home">  <Button variant="light">Trending question</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home"><Button variant="light">Following topic</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item className='link-1'>
                    <Nav.Link href="/home"><Button variant="light" >My question</Button></Nav.Link>
                </Nav.Item>
                <NavDropdown title="Filter by" id="nav-dropdown">
                    {/*<Button variant="light" onClick={filterByLikes}>Likes</Button>*/}
                    <NavDropdown.Item  eventKey="4.2" onClick={filterByLikes}>Likes</NavDropdown.Item>
                    <NavDropdown.Item  eventKey="4.2" onClick={filterByComments}>Comements</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" onClick={filterByViews}>Views</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4" onClick={filterByDislikes}>Dislikes</NavDropdown.Item>
                </NavDropdown>
            </Nav>
           </div>
            <div className='all_questions1'>
                {
                    questions.length === 0 ? "You haven't answered yet" :
                        questions.map(question => <div className='block_question'>

                                <Block_qa key={question.id} author_id={question.author_id} date_of_publication={question.date_of_publication} title={question.title}
                                          text_body={question.text_body} tags={question.tags} number_of_views={question.number_of_views}
                                          number_of_likes={question.number_of_likes} number_of_dislikes={question.number_of_dislikes} number_of_comments={question.number_of_comments}/>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default List
