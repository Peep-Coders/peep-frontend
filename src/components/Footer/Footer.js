import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {
	return (
		<div className={styles.footer_container}>
			<span> PEEP &copy; | Created by PeepTeam </span>
		</div>
	);
}

export default Footer;
