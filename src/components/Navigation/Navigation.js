import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'

function Navigation(props) {
    return (
			<div className={styles.nav_bar}>
				<div className={styles.btnContainer}>
					<button className={styles.nav_button}>
						<Link to='../Login' className={styles.linktag}>
							{' '}
							Login{' '}
						</Link>
					</button>
					<button className={styles.nav_button}>
						<Link to='../About' className={styles.linktag}>
							{' '}
							About{' '}
						</Link>
					</button>
					<button className={styles.nav_button}>
						<Link to='../People' className={styles.linktag}>
							{' '}
							People{' '}
						</Link>
					</button>
				</div>
			</div>
		);
}

export default Navigation;