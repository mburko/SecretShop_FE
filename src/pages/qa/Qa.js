import React from 'react';
import NavBar from "../../Components/NavBar";
import QA from "./qa_page";
import '../following/main_follow.css'

const Qa = () => {
    return (
        <div className='App'>
            <div className='main'>
                <div className='mynavbar'>
                    <NavBar/>
                </div>
                    <QA/>
                </div>
        </div>
    );
};

export default Qa;