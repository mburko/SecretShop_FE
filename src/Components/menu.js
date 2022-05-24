import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Qa from "../pages/qa/Qa";
import MyanswerPage from "../pages/myanswer/myanswer_page";
import NotificationPage from "../pages/notification/notification_page";
import FollowingPage from "../pages/following/following_page";
import MessagePage from "../pages/message/message_page";
import Profile from "../pages/profile/profile";
import Login from "../pages/login/login";
import Registration from "../pages/registration/Registration";

const Menu = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="login" element={<Login/>} />
                    <Route exact path="registration" element={<Registration/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Menu;