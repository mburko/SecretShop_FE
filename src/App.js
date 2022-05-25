import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './Components/NavBar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QA from './pages/qa/qa_page';
import MyanswerPage from "./pages/myanswer/myanswer_page";
import Registration from "./pages/registration/Registration";
import { Outlet, Link } from "react-router-dom";
import Qa from "./pages/qa/Qa";
import Quest_tag from "./pages/quest_tag";
import qa_page from "./pages/qa/qa_page";
import Cookies from 'js-cookie';

export default function App() {

    function page(){
        if (Cookies.get("jwt_session") !== undefined)
        {
            return <div>
                <qa_page/>
                {/*<NavBar/>*/}
                <Outlet/>
            </div>
        }
        else {
            return <div>
                <Registration/>
                <Outlet/>
            </div>
        }
    }

    return (
        page()
    );
}
