import React from 'react';

import axios from 'axios'
import { useEffect, useState } from 'react';

function Post(props) {
    //State variable to hold list of users
    const [users, setUsers] = useState([]);

useEffect(()=>{
    getUsers();
}, []);

//getting user function from PeeP API
const getUsers = async () => {
    try {
        //change fetch request path to localhost:3001/posts/Post
        const res = await axios.get(
        //API LINK/KEY 
        );
        setUsers(res.data);
    } catch (error) {
        console.log(error)
    }   
}

    return (
        <div>
            {/* Form Handle Submit, LOT GOING ON WITH FORM */}
            <ul>
                <li>{users}</li>
                <li>{users}</li>
                <li>{users}</li>
            </ul>
        </div>
    );
}

export default Post;