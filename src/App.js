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

export default function App() {
    const [isAuth, setIsAuth] = useState(true);
    useEffect(() => {
        isAuthenticated();
    }, []);

    function isAuthenticated(){

    }

    function page()
    {
        if (isAuth === true) {
            return <div>
                <NavBar/>
                <Outlet/>
            </div>
        }
        else {
            return <div>
                <Registration/>
            </div>
        }
    }

    return (
        page()
    );
}
