import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';

const CreatePost = ({ loggedIn }) => {
    const [posts, setPosts] = useState([]);

    const getPostsIndex = async () => {
        try {
            const response = await fetch(API_URL + 'peep/');
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                setPosts(data);
            }
        } catch (error) {}
    }

    useEffect(() => {
        getPostsIndex();
    }, []);

    if (!posts.length) {
        return null; 
    }

    return (
       <div>
           <h1>Post</h1>
       </div>
    )

}

export default CreatePost