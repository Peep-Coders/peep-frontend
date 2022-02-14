import React, { useReducer } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';


function Login(props) {
	return (
		<div>
			<h3>Login To Your Account</h3>
			<div>
				<form>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						
						placeholder='email'
						autoComplete='off'
					/>
					<label htmlFor='password'>Password:</label>
					<input
						id='password'
						type='text'
						
						placeholder='password'
						autoComplete='off'
					/>
					<button type='button'>
						<AiFillEye />
					</button>
                    <button>
                        <h4>Login</h4>
                    </button>
                    <span>Don't have an account?&nbsp;
                        <Link to='/register'>
                        Register
                        </Link>
                        &nbsp;now!
                    </span>
				</form>
			</div>
		</div>
	);
}

export default Login;
