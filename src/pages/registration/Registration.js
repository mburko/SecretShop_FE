import React, {useEffect, useState} from 'react';
import axios from "axios";
import './registration.css'
import community_logo from '../../icons/community 1.svg'
import gmail from '../../icons/gmail 1.svg'
import facebook from '../../icons/facebook 1.svg'

const Registration = () => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [againPassword, setAgainPassword] = useState();
    const [error, setError] = useState('');

    // useEffect(() => {
    //     newUserRegistration();
    // }, []);

    // function passwordsMatchError()
    // {
    //     setError('Passwords do not match');
    // }

    function click()
    {
        try{
            newUserRegistration();
        }
        catch (e)
        {
            alert(e.response.data.message);
        }
    }

    // function newUserRegistration(e)
    // {
    //     e.preventDefault();
    //     if(password === againPassword){
    //         try {
    //             axios({
    //                 method: "POST",
    //                 url: "https://mydjangoapp21.herokuapp.com/api/register",
    //                 data: {
    //                     email: email,
    //                     username: username,
    //                     password: password
    //                 }
    //             })
    //         }
    //         catch (e)
    //         {
    //             alert(e.response.data.message.email)
    //             console.log(e.response.data.message.email)
    //         }
    //     }
    //     else
    //     {
    //         passwordsMatchError();
    //     }

    function newUserRegistration(e)
    {
        e.preventDefault();
        if(password === againPassword){
            // try {
                axios.post("https://mydjangoapp21.herokuapp.com/api/register",{
                    data: {
                        email: email,
                        username: username,
                        password: password
                    }
                }).then((response) => {
                    console.log(response.data);
                    console.log(response.data.email[0]);
                    setError(response.data.email[0]);
                })
                    .catch(e)
                {
                    console.log('catch response data');
                    console.log(e.response.data);
                    setError(e.response);
                }
            // }
            // catch (e)
            // {
            //     console.log(e)
            //     //setError(e.response);
            // }
        }
        else
        {
            setError('Passwords do not match')
        }

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
                        <button>Log in</button>
                    </div>
                </div>


                <div className='registration__form__join'>
                    <form>
                        <div className='registration__form__join__title'>
                            JOIN OUR COMMUNITY!
                        </div>

                        <div className='registration__form__join__data'>
                            <div className='email'>
                                <p>Enter your email</p>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type='email'
                                />
                            </div>
                            <div className='username'>
                                <p>Enter your username</p>
                                <input
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    type='text'
                                />
                            </div>
                            <div className='password'>
                                <p>Enter your password</p>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type='password'
                                />
                            </div>
                            <div className='password'>
                                <p>Enter your password again</p>
                                <input
                                    value={againPassword}
                                    onChange={e => setAgainPassword(e.target.value)}
                                    type='password'
                                />
                            </div>

                            <div className='errors'>
                                {error}
                            </div>

                            <div className='sign_up__button'>
                                <button onClick={newUserRegistration}>Sign up</button>
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

export default Registration;