import React , {useState} from 'react';
import { Link,  } from 'react-router-dom';
import styles from './Navigation.module.css';
import API_URL from '../../apiConfig';
import { Navigate, useNavigate } from 'react-router-dom';

function Navigation({setLoggedIn, loggedIn}, props) {

	const navigate = useNavigate();

	const handleLogout = async () => {
		// console.log(localStorage.getItem('token'));
		// console.log(props)
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				// alert('You have been logged out!');
				setLoggedIn(false);
				// setUserInfo(null);
				localStorage.removeItem('token');
				navigate('/about');
				
			}
		} catch (err) {
			console.log(err);
		}
	};
	
	return (
		<div className={styles.nav_bar}>
			<div className={styles.btnContainer}>
				<button className={styles.nav_button}>
					<Link to='../' className={styles.linktag}>
						{' '}
						Home{' '}
					</Link>
				</button>
				<button className={styles.nav_button}>
					<Link to='../About' className={styles.linktag}>
						About
					</Link>
				</button>
				{loggedIn ? (
					<>
						{/* LOG OUT BUTTON */}
						<button onClick={handleLogout} className={styles.nav_button}>
							Logout
						</button>
					</>
				) : (
					<>
						{/* LOG IN BUTTON */}
						<button className={styles.nav_button}>
							<Link to='../Login' className={styles.linktag}>
								Login
							</Link>
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Navigation;
