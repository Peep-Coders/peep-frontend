import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {
	return (
		<div className={styles.footerContainer}>
			<span> PEEP &copy; | Created by PeepTeam </span>
		</div>
	);
}

export default Footer;
