import React from 'react';
import NavBar from "../../Components/NavBar";
import QA from "./qa_page";

const Qa = () => {
    return (
        <div className='App'>
            <div className='main'>
                <NavBar></NavBar>
                <QA></QA>
            </div>
        </div>
    );
};

export default Qa;