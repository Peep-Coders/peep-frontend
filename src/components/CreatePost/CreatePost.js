import React, { useState } from 'react';
import PostDetails from '../PostDetails/PostDetails'
import Posts from '../Posts/Posts'
import API_URL from '../../apiConfig';

const CreatePost = ({ loggedIn }) => {
    const initialPostData = {
        post: '',
        image: '',
    }
    const [newPost, setNewPost] = useState(initialPostData);
    const handleChange = (event) => {
        setNewPost((prevState) => {
            return {
                ...prevState, [event.target.id]: event.target.value }; 
        });
    };

    const handleFileUpload = (event) => {
        setNewPost((prevState) => {
            return {
                ...prevState, [event.target.id]: event.target.value 
            };
        });
    }

    

    const newPost = async (event) => {
        console.log('inside create post')
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            const response = await fetch(API_URL + 'peep/', {
							method: 'POST',
							body: data,
							headers: {
								Authorization: `Token 946799bba8dba6944bac1d0f3d278fe9d27c5945`,
							},
						});
        } catch (error) {
            console.log(error)
        }
    }
    
        return (
        <div>
            <PostDetails
            newPost={newPost}
            handleChange={handleChange}
            handleFileUpload={handleFileUpload}
            formData={newPost}
           />
           <Posts></Posts>
        </div>
        )
};
export default CreatePost;