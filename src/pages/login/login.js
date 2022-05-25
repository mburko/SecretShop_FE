import React, {useState} from 'react';
import axios from "axios";
import community_logo from "../../icons/community 1.svg";
import gmail from "../../icons/gmail 1.svg";
import facebook from "../../icons/facebook 1.svg";
import './login.css';
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
    let navigate = useNavigate();
    const [iemail, setEmail] = useState();
    const [ipassword, setPassword] = useState();
    const [error, setError] = useState('');

    function logIn(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: 'https://mydjangoapp21.herokuapp.com/api/login',
            data: {
                email: iemail,
                password: ipassword
            }
        })
            .then((response) => {
                // console.log('like response');
                // console.log(response);
                // console.log('like response data');
                // console.log(response.data);
                console.log('like response status');
                console.log(response.status);
                if (response.status === 200)
                {
                    setCookie('jwt_session', response.data.jwt_session, 60);
                    console.log('redirect')
                    navigate("/");
                }
            })
    }

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        console.log('document.cookie');
        console.log(document.cookie);
    }

    // function loginme() {
    //     axios.post('https://mydjangoapp21.herokuapp.com/api/login', {
    //         email: 'chaikovska@gmail.com',
    //         password: '1234'
    //     })
    //         .then(function (response) {
    //             console.log('login response jwt');
    //             console.log(response.data.jwt_session);
    //             setCookie('jwt_session', response.data.jwt_session, 60);
    //         })
    // };

    function Registration()
    {
        navigate("/registration");
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <div className='logo_name'>
                    <p>Logo_name</p>
                </div>
                <img src={community_logo}
                     alt='community logo'
                     width='80%'
                     height='80%'
                />
            </div>

            <div className='login__form'>

                <div className='login__form__buttons'>
                    <div className='button__1'>
                        <button>ukr</button>
                    </div>
                    <div className='button__log_in'>
                        <button onClick={Registration}>Sign up</button>
                    </div>
                </div>

                <div className='login__form__join'>
                    <div className='login__form__join__inner'>
                        <form>
                            <div className='login__form__join__title'>
                                JOIN OUR COMMUNITY!
                            </div>

                            <div className='login__form__join__data'>
                                <div className='login__email'>
                                    <p>Enter your email</p>
                                    <input
                                        value={iemail}
                                        onChange={e => setEmail(e.target.value)}
                                        type='email'
                                    />
                                </div>
                                <div className='login__password'>
                                    <p>Enter your password</p>
                                    <input
                                        value={ipassword}
                                        onChange={e => setPassword(e.target.value)}
                                        type='password'
                                    />
                                </div>

                                <div className='errors'>
                                    {error}
                                </div>

                                <div className='sign_up__button'>
                                    <button onClick={logIn}>Log in</button>
                                </div>

                                <div className='sign_up_with'>
                                    <div className='sign_up_with__gm'>
                                        <img src={gmail}
                                             alt='gmail'
                                             width='50%'
                                             height='50%'
                                        />
                                    </div>
                                    <div className='or'>
                                        <p>OR</p>
                                    </div>
                                    <div className='sign_up_with__fb'>
                                        <img src={facebook}
                                             alt='gmail'
                                             width='45%'
                                             height='45%'
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;