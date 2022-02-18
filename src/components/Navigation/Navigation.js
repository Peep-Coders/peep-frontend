import React , {useState} from 'react';
import { Link,  } from 'react-router-dom';
import styles from './Navigation.module.css';
import API_URL from '../../apiConfig';

function Navigation({setLoggedIn}) {

	const handleLogout = async () => {
		console.log(localStorage.getItem('token'));
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				alert('You have been logged out!');
				setLoggedIn(false);
				// setUserInfo(null);
				localStorage.removeItem('token');
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
				<button
					className={styles.nav_button}>
					<Link to='../Login' className={styles.linktag}>
						Login
					</Link>
				</button>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</div>
	);
}

export default Navigation;
