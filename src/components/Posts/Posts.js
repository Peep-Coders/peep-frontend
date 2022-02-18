import React, { useState, useEffect } from 'react';
import API_URL from '../../apiConfig';
import { Container, Image, Button } from 'react-bootstrap';
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
    // for handling the data if none 
    // if (!posts.length) {
    //     return null; 
    // }   

// function setTime(){
//     const d = new Date();
//     let text = d.toLocaleTimeString();
//     return text;
// }

// function setDate(){
//     const d = new Date();
//     let text2 = d.toLocaleDateString();
//     return text2;
// }

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
                            posted on: {new Date().toLocaleDateString()}
                            <br/>
                            {/* {new Date().toLocaleTimeString(post)} */}
                            {/* <br/> */}
                            {/* post.date */}
                            by: {post.username}
                        </p>
						</div>
					);
				})}
			</div>
		);
};


export default Posts;