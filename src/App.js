import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import qa_page from "./pages/qa/qa_page";
import Registration from "./pages/registration/Registration";

export default function App() {
    return (
        <div>
            <NavBar/>
            <qa_page/>
            <Outlet />
        </div>
    );
}
