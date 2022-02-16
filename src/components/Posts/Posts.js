import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';

const Posts = ({ loggedin }) => {
    const [ posts, setPosts ] = useState([]);

const getPostsIndex = async () => {
        try {
            const response = await fetch(API_URL + 'peep/');
            if (response.status === 200) {
                const data = await response.json();
                setPosts(data);
            }
        }
        catch (error) {}
    }

useEffect(() => {
    getPostsIndex();
}, []);

    return (
    <div>
        {posts.map((post) => {
            return (
                <div>
                    <h1>Hello {post}</h1>
                </div>
            );
        })}
    </div>
    );
};


    // for handling the data if none 
    // if (!posts.length) {
    //     return null; 
    // }   



export default Posts;