import React from 'react';
import NavBar from "../../Components/NavBar";
import './following.css';

const FollowingPage = () => {
    return (
        <div className='page'>
            <div className='mynavbar'>
                <NavBar/>
            </div>

            <div className='page__following'>

                <div className='header'>
                    <div className='following__title'>
                        <p>Following</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default FollowingPage;