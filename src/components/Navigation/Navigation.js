import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
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
					<Link to='../People' className={styles.linktag}>
						{' '}
						People{' '}
					</Link>
				</button>
				<button className={styles.nav_button}>
					<Link to='../About' className={styles.linktag}>
						About
					</Link>
				</button>
				<button
					className={styles.nav_button}
					onClick={() => setIsLoggedIn(true)}>
					{isLoggedIn ? 'Logout' : 'Login'}
					<Link to='../Login' className={styles.linktag}>
						{' '}
						Login{' '}
					</Link>
				</button>
			</div>
		</div>
	);
}

export default Navigation;
