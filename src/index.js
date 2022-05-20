import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Qa from "./pages/qa/Qa";
import MyanswerPage from "./pages/myanswer/myanswer_page";
import NotificationPage from "./pages/notification/notification_page";
import Following_page from "./pages/following/following_page";
import FollowingPage from "./pages/following/following_page";
import MessagePage from "./pages/message/message_page";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Qa />} />
                <Route path="myanswer" element={<MyanswerPage />} />
                <Route path="notification" element={<NotificationPage />} />
                <Route path="following" element={<FollowingPage />} />
                <Route path="message" element={<MessagePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
