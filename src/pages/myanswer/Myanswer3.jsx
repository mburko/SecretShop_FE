import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBar from "../../Components/NavBar";
import vector from "../../icons/Vector 1.png"
import "./myanswer.css";
import MAquestion from "../../Components/MAquestion/MAquestion";
import quests from "../../Components/MAquestion/quest.json"

const Myanswer3 = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        getQuestions();
    }, []);


    function getQuestions() {
        // axios({
        //     method: "GET",
        //     url:"https://mydjangoapp21.herokuapp.com/api/questions",
        // }).then((response)=>{
        //     const data = response.data
        //     setQuestions(data)
        // }).catch((error) => {
        //     if (error.response) {
        //         console.log(error.response);
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     }
        // })

        axios.get("https://mydjangoapp21.herokuapp.com/api/questions")
            .then((response)=> {
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
        <div>
            {
                questions.length === 0 ? "no questions" :
                    questions.map(question => <div className='question'>
                            <MAquestion /*key={question.id}*/ question={question}/>
                        </div>
                    )
            }
        </div>
    );
};

export default Myanswer3;