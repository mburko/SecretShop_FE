import React from 'react';
import NavBar from "../../Components/NavBar";
import './profile.css';
import logout from '../../icons/logout 1.svg';
import ellipse from '../../icons/Ellipse 1.png';
import edit from '../../icons/edit 1.svg';

const Profile = () => {
    const [profile, setProfile] = [{
        username: "Profile name",
        phone: '+380988989898',
        email: "email@gmail.com",
        question: "200",
        answer: "200",
        follower: "20",
        following: "200"
    }]

    return (
        <div className='page'>
            <div className='mynavbar'>
                <NavBar/>
            </div>

            <div className='page__profile'>

                <div className='header'>
                    <div className='profile__title'>
                        <p>Profile</p>
                    </div>
                </div>

                <div className='profile__body'>
                    <div className='profile__logo__log_out'>
                        <div className='profile__logo'>
                            <img
                                src={ellipse}
                                height="100%"
                                width="100%"
                            />
                        </div>
                        <div className='log_out__button'>
                            <button> <img
                                src={logout}
                                height="15%"
                                width="15%" />
                                Log out</button>
                        </div>

                    </div>
                    <div className='profile__info'>
                        <div className='profile__name__edit'>
                            <div className='username'>
                                {profile.username}
                            </div>
                            <div className='edit'>
                                <button>
                                    <img
                                        src={edit}
                                        height="80%"
                                        width="80%"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className='profile__number'>
                            {profile.phone}
                        </div>
                        <div className='profile__email'>
                            {profile.email}
                        </div>
                        <div className='profile__statistic'>
                            <div className='statistic'>
                                <div className='statistic__num'>
                                    {profile.question}
                                </div>
                                <div className='statistic__text'>
                                    question
                                </div>
                            </div>
                            <div className='statistic'>
                                <div className='statistic__num'>
                                    {profile.answer}
                                </div>
                                <div className='statistic__text'>
                                    answer
                                </div>
                            </div>
                            <div className='statistic'>
                                <div className='statistic__num'>
                                    {profile.follower}
                                </div>
                                <div className='statistic__text'>
                                    follower
                                </div>
                            </div>
                            <div className='statistic'>
                                <div className='statistic__num'>
                                    {profile.following}
                                </div>
                                <div className='statistic__text'>
                                    following
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;