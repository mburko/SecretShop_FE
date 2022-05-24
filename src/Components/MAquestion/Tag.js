import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "js-cookie";

const Tag = (props) => {
    const [tag, setTag] = useState([])

    useEffect(() => {
        getTag(props.tag_id);
    }, []);

    function getTag(tagId) {
        axios.get("https://mydjangoapp21.herokuapp.com/api/tags/"+tagId, {
            headers:{
                "Authorization": Cookies.get("jwt_session"),
            }
        })
            .then((response)=> {
                const data = response.data;
                setTag(data);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
    }
    return (
        <div>
            {tag.tag_name}
        </div>
    );
};

export default Tag;