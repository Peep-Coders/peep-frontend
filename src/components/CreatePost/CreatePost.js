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

    

    const createPost = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            const response = await fetch(API_URL + 'peep/', {
                method: 'POST',
                body: data,
                headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
    
        return (
        <div>
            <PostDetails
            handleSubmit={createPost}
            handleChange={handleChange}
            handleFileUpload={handleFileUpload}
            formData={newPost}
           />
           <Posts></Posts>
        </div>
        )
};
export default CreatePost;