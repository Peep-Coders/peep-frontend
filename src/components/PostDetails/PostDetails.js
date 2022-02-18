import { useState, useEffect } from 'react';
// import {
// 	Form,
// 	Button,
// 	Alert,
// 	FormGroup,
// 	FormControl,
// 	ControlLabel,
// } from 'react-bootstrap';
import {Form, Button, Alert, FormGroup} from 'react-bootstrap'
import API_URL from '../../apiConfig';
import styles from './PostDetails.modules.css';
import { Navigate, useNavigate } from 'react-router-dom';



const PostDetails = ({
	// createPost,
	// formData,
	// handleChange,
	// handleFileUpload,
	error,
}) => {
	const navigate = useNavigate();
	    const initialPostData = {
				post: '',
				image: '',
			};
			const [newPost, setNewPost] = useState(initialPostData);
			const handleChange = (event) => {
				createPost()
				console.log('inside handle change')
				setNewPost((prevState) => {
					return {
						...prevState,
						[event.target.id]: event.target.value,
					};
				});
			};

			const handleFileUpload = (event) => {
				setNewPost((prevState) => {
					return {
						...prevState,
						[event.target.id]: event.target.value,
					};
				});
			};

			const createPost = async (event) => {
				// console.log('inside create postddddd')
				event.preventDefault();
				const data = new FormData(event.target);
				try {
					const response = await fetch(API_URL + 'peep/', {
						method: 'POST',
						body: data,
						headers: {
							Authorization: `Token ${localStorage.getItem('token')}`,
						},
					});
								if (response.status === 201) {
									navigate('/about');
								}
				} catch (error) {
					console.log(error);
				}
					setNewPost((prevState) => {
					return {
						...prevState,
						[event.target.id]: event.target.value,
					};
				});
			};
	return (
		<div className='posts_main'>
			<Form onSubmit={createPost} encType='multipart/form-data'>
				<Form.Group controlId='post'>
					<Form.Control
						required
						autoFocus
						className='posts_box'
						type='text'
						name='post'
						placeholder='Say Something'
					/>
				</Form.Group>
				<Form.Group controlId='image'>
					<Form.Control
						className='file_button'
						type='file'
						name='image'
						accept='image/*'
						onChange={handleFileUpload}
					/>
				</Form.Group>
				<Button className='mt-4' type='submit' disabled={error}>
					<h4>Post</h4>
				</Button>
				{error && <Alert variant='danger'>Error, Try again!</Alert>}
			</Form>
		</div>
	);
};

export default PostDetails;
