import React, { useState, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import axios from 'axios';

// Styles
import styles from './Login.module.css';

function Login({ UserLogout }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userLogin, setUserLogin] = useState(null);
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
					setUserLogin((user) => {
						navigate('/');
						return { ...user, token: res.data.token };
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
		<div className={styles.start_grid}>
			<div className={styles.login}>
				<h3 className={styles.login_h3}>Login To Your Account</h3>
				<div className={styles.login_main}>
					<form onSubmit={handleSubmit} className={styles.login_form}>
						{/* <label htmlFor='email' className={styles.form_label}>
							Email:
						</label> */}
						<input
							className={styles.login_input}
							id='email'
							type='email'
							placeholder='email'
							onChange={handleChange}
							autoComplete='off'
						/>
						{/* <label htmlFor='password' className={styles.form_label}>
							Password:
						</label> */}
						<div>
							<input
								id='password'
								type='password'
								placeholder='password'
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
						{errMessage ? <p className={styles.errMsg}>{errMessage}</p> : ''}
						<button className={styles.login_button} onClick={() => setIsLoggedIn(true)} > {isLoggedIn ? 'Logout' : 'Login'}
							<h4>Login</h4>
						</button>
						<p className={styles.login_text}>
							Don't have an account?&nbsp;
							<Link to='/register'>Register</Link>
							&nbsp;now!
						</p> 
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;