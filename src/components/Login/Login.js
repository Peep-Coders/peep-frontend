import React, { useState, useContext, useRef } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import axios from 'axios';
import { UserContext } from '../../context/userContext';


function Login(props) {
	const [userContext, setUserContext] = useContext(UserContext);
	const [showPass, setShowpass] = useState(false);
	const [errMessage, setErrMessage] = useState(null);
	const togglePass = useRef(null);
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
		loggedIn: true,
	});
	const handleLogin = () => {
		axios
		.post('https://polar-river-02223.herokuapp.com/token/login', user)
		.then((res) => {
			if (res.data === 'The provided username or password is incorrect') {
				setErrMessage(res.data);
			}
			if (res.data !== 'The provided username or password is incorrect') {
				setUserContext((user) => {
					navigate('/');
					return { ...user, token: res.data.token }
				});
			}
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleLogin();
	};

	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};

	const showPassword = () => {
		if (showPass) {
			togglePass.current.attributes['1'].value = 'text';
		}
		if (!showPass) {
			togglePass.current.attributes['1'].value = 'password';
		}
		setShowpass(!showPass);
	};

	return (
		<div>
			<h3>Login To Your Account</h3>
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						placeholder='email'
						onChange={handleChange}
						autoComplete='off'
					/>
					<label htmlFor='password'>Password:</label>
					<div>
					<input
						id='password'
						type='text'
						placeholder='password'
						onChange={handleChange}
						autoComplete='off'
					/>
					<button type='button' onClick={showPassword}>
						<AiFillEye />
					</button>
					</div>
					{errMessage ? <p className={styles.errMsg}>{errMessage}</p> : ''}
					<button>
						<h4>Login</h4>
					</button>
					<span>
						Don't have an account?&nbsp;
						<Link to='/register'>Register</Link>
						&nbsp;now!
					</span>
				</form>
			</div>
		</div>
	);
}

export default Login;
