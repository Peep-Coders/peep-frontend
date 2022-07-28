import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';
import styles from './Posts.modules.css'

const Posts = ({ loggedin }) => {
    const [ posts, setPosts ] = useState([]);

const getPostsIndex = async () => {
        try {
            const response = await fetch(API_URL + 'peep/');
            if (response.status === 200) {
                const data = await response.json();
                // console.log(data[0].username)
                setPosts(data);
            }
        }
        catch (error) {}
    }

useEffect(() => {
    getPostsIndex();
}, []);

    return (
			<div >
				{posts.map((post) => {
					return (
						<div key={post.id} className='posts_secondary'>
                            <p className='post_p'>{post.post}</p>    
                        <img src= 
                        {post.image} alt="Hello" className='posts_img'
                        />
                        <p className='posts_date'>
                            {new Date().toLocaleDateString()}
                            <br/>
                        </p>
                            <p className='posts_username'>@{post.username}</p>
						</div>
					);
				})}
			</div>
		);
};


export default Posts;