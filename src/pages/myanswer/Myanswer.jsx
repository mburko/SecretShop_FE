import React from 'react';
import axios from "axios";
import './myanswer.css'
import NavBar from '../../Components/NavBar'
import vector from '../../icons/Vector 1.png'
import MAquestion from "../../Components/MAquestion/MAquestion";

export default class Myanswer extends React.Component {
    state = {
        questions: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/questions`)
            .then(res => {
                const quests = res.data;
                this.setState({ quests });
            }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })

    }

    render() {
        return (

            <div className='page'>
                {/*<div className='mynavbar'>*/}
                {/*    <NavBar/>*/}
                {/*</div>*/}

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
                                <button onClick={axios.get(`http://127.0.0.1:8000/api/questions`)
                                    .then(res => {
                                        const quests = res.data;
                                        this.setState({ quests });
                                    }).catch((error) => {
                                        if (error.response) {
                                            console.log(error.response);
                                            console.log(error.response.status);
                                            console.log(error.response.headers);
                                        }
                                    })}>Likes</button>
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
                    </div>

                    <div className='all_questions'>
                        {
                            this.state.questions.map(quest => <div className='questions_answers'>
                                <div className='question'>
                                    <MAquestion question={quest} />
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>

        );
    }
}

// const Myanswer = () => {
//     const [questions, setQuestions] = useState(quests)
//
//     function filterByLikes() {
//         //setQuestions(questsbylikes)
//         axios({
//             method: "GET",
//             url:"127.0.0.1:8000/api/questions"
//         }).then((response)=>{
//             const data = response.data
//             setQuestions(data)
//         }).catch((error) => {
//             if (error.response) {
//                 console.log(error.response);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             }
//         })
//     }
//
//     function filterByTime() {
//         //setQuestions(questsbytime)
//         axios({
//             method: "GET",
//             url:"/bytime/",
//         }).then((response)=>{
//             const data = response.data
//             setQuestions(data)
//         }).catch((error) => {
//             if (error.response) {
//                 console.log(error.response);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             }
//         })
//     }
//
//     function filterByComments() {
//         //setQuestions(questsbycomments)
//         axios({
//             method: "GET",
//             url:"/bycomments/",
//         }).then((response)=>{
//             const data = response.data
//             setQuestions(data)
//         }).catch((error) => {
//             if (error.response) {
//                 console.log(error.response);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             }
//         })
//     }
//
//     function filterBySaves() {
//         //setQuestions(quests)
//         axios({
//             method: "GET",
//             url:"/bysaves/",
//         }).then((response)=>{
//             const data = response.data
//             setQuestions(data)
//         }).catch((error) => {
//             if (error.response) {
//                 console.log(error.response);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             }
//         })
//     }
//
//     return (
//         <div className='page'>
//             <div className='mynavbar'>
//                 <NavBar/>
//             </div>
//
//             <div className='page__myanswer'>
//
//                 <div className='header'>
//                     <div className='myanswer__title'>
//                         <p>My answer</p>
//                     </div>
//
//                     <div className='myanswer__filter'>
//                         <div className='myanswer__filterby'>
//                             <p>Filter by</p>
//                             <div className='vector'>
//                                 <img src={vector}
//                                      width="15"
//                                      height="15"
//                                 />
//                             </div>
//                         </div>
//
//                         <div className='filter__buttons'>
//                             <div className='filter__button__like'>
//                                 <FilterBy onClick={filterByLikes}>Likes</FilterBy>
//                             </div>
//                             <div className='filter__button__time'>
//                                 <FilterBy onClick={filterByTime}>Time</FilterBy>
//                             </div>
//                             <div className='filter__button__comments'>
//                                 <FilterBy onClick={filterByComments}>Comments</FilterBy>
//                             </div>
//                             <div className='filter__button__saves'>
//                                 <FilterBy onClick={filterBySaves}>Saves</FilterBy>
//                             </div>
//                         </div>
//
//                     </div>
//                 </div>
//
//                 <div className='all_questions'>
//                     {
//                         questions.map(quest => <div className='questions_answers'>
//                                 <div className='question'>
//                                     <div className='question__author'>
//                                         <Author logo={author_logo} name={quest.authorname}/>
//                                     </div>
//                                     <div className='question__body'>
//                                         <QuestionBody date={quest.questiondate} title={quest.questiontitle} text={quest.questiontext}
//                                                       looked={quest.questionlooked} like={quest.questionlike} dislike={quest.questionunlike}
//                                         />
//                                     </div>
//                                 </div>
//                                 {
//                                     quest.answers.map(answ =>
//                                         <div className='answers'>
//                                             <div className='answer__author'>
//                                                 <Author logo={author_logo} name={answ.answername}/>
//                                             </div>
//                                             <div className='answer__body'>
//                                                 <Answer date={answ.answerdate} text={answ.answertext}
//                                                         like={answ.answerlike} dislike={answ.answerunlike}/>
//                                             </div>
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Myanswer;
