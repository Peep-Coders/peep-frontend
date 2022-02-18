import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// stylesheet
import styles from './Register.module.css';
// axios
import axios from 'axios';
// images/components
import { AiFillEye } from 'react-icons/ai';
import API_URL from '../../apiConfig';

function Register(props) {
	const togglePass = useRef(null);
	// const [showPass, setShowPass] = useState(false);
	const navigate = useNavigate();
	// const [formData, setFormData] = useState(initialFormData);
	const [registered, setRegistered] = useState({
		email: '',
		username: '',
		password: '',
		re_password: '',
	});
	const handleRegistered = async () => {
		console.log(registered)
			try {
				const response = await fetch('https://polar-river-02223.herokuapp.com/users/', {
					method: 'POST',
					body: JSON.stringify(registered),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				navigate('/login')
			} catch (error) {
				console.log(error);
			}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('registered');
		handleRegistered();
	};
	const handleChange = (event) => {
		setRegistered({ ...registered, [event.target.id]: event.target.value });
	};
	// const showPassword = () => {
	// 	if (showPass) {
	// 		togglePass.current.attributes['1'].value = 'text';
	// 	}
	// 	if (!showPass) {
	// 		togglePass.current.attributes['1'].value = 'password';
	// 	}
	// 	setShowPass(!showPass);
	
	return (
		<div className={styles.start_grid}>
			<div className={styles.login}>
				<h3 className={styles.login_h3}>Register Your Account</h3>
				<div className={styles.login_main}>
					<form onSubmit={handleSubmit}>
						{/* <label htmlFor='email' className={styles.login_form}>
							Email:
						</label> */}
						<input
							className={styles.login_input}
							id='email'
							type='email'
							value={registered.email}
							placeholder='email'
							onChange={handleChange}
							autoComplete='off'
						/>
						<input
							className={styles.login_input}
							id='username'
							type='text'
							value={registered.username}
							placeholder='username'
							onChange={handleChange}
							autoComplete='off'
						/>
						{/* <label htmlFor='password' className={styles.form_label}>
							Password:
						</label> */}
						<div>
							<input
								ref={togglePass}
								id='password'
								className={styles.password}
								type='password'
								value={registered.password}
								placeholder='password'
								onChange={handleChange}
								autoComplete='off'
							/>
							<input
								ref={togglePass}
								id='re_password'
								className={styles.password}
								type='password'
								value={registered.re_password}
								placeholder='re_password'
								onChange={handleChange}
								autoComplete='off'
							/>
							{/* <button
								type='button'
								onClick={showPassword}
								className={styles.eye_button}>
								<AiFillEye />
							</button> */}
						</div>
						<button type='submit' className={styles.login_button}>
							<h4>Register</h4>
						</button>
						<p>
							Already have an account?&nbsp;
							<Link to='/login'>Login</Link>
							&nbsp;now!
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
