import React, {useEffect, useState} from 'react'
import './following.css'
import Following from './block_follow'
import axios from "axios";
import Cookies from "js-cookie";

function Follow() {
    const [authorAnswer, setAuthorAnswer] = useState([]);
    useEffect(() => {
        getAuthorAnswer();
    }, []);

    function getAuthorAnswer(){
        axios.get("https://mydjangoapp21.herokuapp.com/api/profile/", {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data;
                setAuthorAnswer(data);
                console.log(response.data);
                console.log('authorAnswer.id');
                console.log(authorAnswer.id);
                //setId(response.data.id)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    };

    const [following, setFollowing] = useState([]);
    useEffect(() => {
        getFollow(authorAnswer.id);
    }, [authorAnswer]);

    function getFollow(authorId)
    {
        // following
        try{
            axios.get("https://mydjangoapp21.herokuapp.com/api/myfollow/"+authorId+"?follow_type=1", {
                headers:{
                    "Authorization": Cookies.get("jwt_session"),
                }
            })
                .then((response)=> {
                    const data = response.data;
                    setFollowing(data);
                    console.log('following')
                    console.log(response.data);
                    console.log('authorAnswer.id');
                    console.log(data.id);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        console.log(error.response.status);
                        //console.log(error.response.headers);
                    }
                })
        }
        catch (error)
        {
            console.log(error.response)
        }

    }

  return (
    <div className='main-following'>
      <div className='logo-following'>
      <h1>Following</h1>
     <div className='block-overflow-following'>
     <div className='info-following'>
<Following></Following>
<Following></Following>
<Following></Following>
      </div>
      <div className='info-following'>
<Following></Following>
<Following></Following>
<Following></Following>

      </div>
      
     </div>
      </div>
    </div>
  )
}

export default Follow
