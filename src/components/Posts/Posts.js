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


    return (
			<div >
				{posts.map((post) => {
					return (
						<div className='posts_secondary'>
							<p className='post_p'>{posts[1].post}</p>
							<Image
								rounded
								fluid
								src={posts[1].image}
								alt='cartoon'
								className='posts_img'
							/>
						</div>
					);
				})}
			</div>
		);
};


export default Posts;