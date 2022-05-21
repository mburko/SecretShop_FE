import './App.css';
import React from 'react';
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
    return (
        <div>
            {/*<h1>Bookkeeper 20.05</h1>*/}
            {/*<nav*/}
            {/*    style={{*/}
            {/*        borderBottom: "solid 1px",*/}
            {/*        paddingBottom: "1rem",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Link to="/qa">Q&A</Link> |{" "}*/}
            {/*    <Link to="/myanswer">My answers</Link>*/}
            {/*</nav>*/}

            <NavBar/>
            <qa_page/>
            <Outlet />
        </div>
    );
}
