import React, {useState} from 'react';
import axios from "axios";
import community_logo from "../../icons/community 1.svg";
import gmail from "../../icons/gmail 1.svg";
import facebook from "../../icons/facebook 1.svg";
import '../registration/registration.css';
import NavBar from "../../Components/NavBar";
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    function registration()
    {
        navigate("/registration");
    }

    ////
    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        console.log('document.cookie');
        console.log(document.cookie);
    }
    function loginme(){
        axios.post('https://mydjangoapp21.herokuapp.com/api/login', {
            email: 'chaikovska@gmail.com',
            password: '1234'
        })
            .then(function (response) {
                console.log('login response jwt');
                console.log(response.data.jwt_session);
                setCookie('jwt_session', response.data.jwt_session, 60);
            })
    };

    function login()
    {
        //
        loginme();
        navigate("/");
    }

    return (
        <div className='registration'>
            <div className='registration__logo'>
                <div className='logo_name'>
                    <p>Logo_name</p>
                </div>
                <img src={community_logo}
                     alt='community logo'
                     width='80%'
                     height='80%'
                />
            </div>

            <div className='registration__form'>

                <div className='registration__form__buttons'>
                    <div className='button__1'>
                        <button>ukr</button>
                    </div>
                    <div className='button__log_in'>
                        <button onClick={registration}>Register</button>
                    </div>
                </div>


                <div className='registration__form__join'>
                    <form>
                        <div className='registration__form__join__title'>
                            JOIN OUR COMMUNITY!
                        </div>

                        <div className='registration__form__join__data'>
                            <div className='registration__email'>
                                <p>Enter your email</p>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type='email'
                                />
                            </div>
                            <div className='registration__password'>
                                <p>Enter your password</p>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type='password'
                                />
                            </div>

                            <div className='errors'>
                                {error}
                            </div>

                            <div className='sign_up__button'>
                                <button onClick={login}>Sign up</button>
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
    );
};

export default Login;