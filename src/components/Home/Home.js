import React from 'react';
import { useState } from 'react';

import PostDetails from '../PostDetails/PostDetails';
import Posts from '../Posts/Posts';
import styles from './Home.module.css';

function Home({loggedIn}) {
	return (
		<div className={styles.home_main}>
			{loggedIn ? (

				<div className={styles.postDetails_container}>
				<PostDetails />
			</div>
				) : (<></>)}
			<div className={styles.posts_container}>
				<Posts />
			</div>
		</div>
	);
}

export default Home;
