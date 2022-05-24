import React, {useEffect, useState} from 'react';
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
import FollowingPage from "./pages/following/following_page";
import MessagePage from "./pages/message/message_page";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Registration from "./pages/registration/Registration";
import Cookies from "js-cookie";
import AuthMenu from "./Components/authMenu";
import Menu from "./Components/menu";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// const [isAuth, setIsAuth] = useState(false);
// useEffect(() => {
//     isAuthenticated();
// }, []);

function isAuthenticated(){
    if (Cookies.get("jwt_session") !== undefined)
    {
        //setIsAuth(true);
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Qa />} />
                    <Route path="myanswer" element={<MyanswerPage />} />
                    <Route path="notification" element={<NotificationPage />} />
                    <Route path="following" element={<FollowingPage />} />
                    <Route path="message" element={<MessagePage />} />
                    <Route path="profile" element={<Profile/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    }
    else {
        //setIsAuth(false);
        return <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="login" element={<Login/>} />
                    <Route path="registration" element={<Registration/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    }
    // try{
    //     Cookies.get("jwt_session");
    //     console.log('Cookies.get("jwt_session");');
    //     console.log(Cookies.get("jwt_session") !== undefined);
    //     isAuth = true;
    //     return <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<App />}>
    //                 <Route path="/" element={<Qa />} />
    //                 <Route path="myanswer" element={<MyanswerPage />} />
    //                 <Route path="notification" element={<NotificationPage />} />
    //                 <Route path="following" element={<FollowingPage />} />
    //                 <Route path="message" element={<MessagePage />} />
    //                 <Route path="profile" element={<Profile/>} />
    //
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    // }
    // catch (error){
    //     isAuth = false;
    //     return <BrowserRouter>
    //         <Routes>
    //             <Route>
    //                 <Route path="login" element={<Login/>} />
    //                 <Route path="registration" element={<Registration/>} />
    //             </Route>
    //         </Routes>
    //     </BrowserRouter>
    // }
}

// const [jwt, setJwt] = useState('');
//
// useEffect(() => {
//     checkJwt();
// }, []);
//
// function checkJwt()
// {
//     if (Cookies.get("jwt_session") !== undefined)
//     {
//         setJwt('1');
//     }
//     else {
//         setJwt('0');
//     }
// }
//
// function page()
// {
//     if (jwt === '1')
//     {
//         return <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App />}>
//                     <Route path="/" element={<Qa />} />
//                     <Route path="myanswer" element={<MyanswerPage />} />
//                     <Route path="notification" element={<NotificationPage />} />
//                     <Route path="following" element={<FollowingPage />} />
//                     <Route path="message" element={<MessagePage />} />
//                     <Route path="profile" element={<Profile/>} />
//
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     }
//     else {
//         return <BrowserRouter>
//                      <Routes>
//                          <Route path="login" element={<Login/>} />
//                          <Route exact path="registration" element={<Registration/>} />
//                      </Routes>
//         </BrowserRouter>
//     }
// }

function page(){
    if(Cookies.get("jwt_session") !== undefined)
    {
        return <AuthMenu/>
    }
    else{
        return <Menu/>
    }
}

root.render(
    //page()

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Qa />} />
                <Route path="myanswer" element={<MyanswerPage />} />
                <Route path="notification" element={<NotificationPage />} />
                <Route path="following" element={<FollowingPage />} />
                <Route path="message" element={<MessagePage />} />
                <Route path="profile" element={<Profile/>} />

            </Route>
        </Routes>
        <Routes>
            <Route>
                <Route path="login" element={<Login/>} />
                <Route path="registration" element={<Registration/>} />
            </Route>
        </Routes>
    </BrowserRouter>

    //isAuthenticated()
);
