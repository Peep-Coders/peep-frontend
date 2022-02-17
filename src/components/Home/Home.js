import React from 'react';

import PostDetails from '../PostDetails/PostDetails';
import Posts from '../Posts/Posts';
import CreatePost from '../CreatePost/CreatePost';
import styles from './Home.module.css';

function Home(props) {
	return (
		<div className={styles.home_main}>
			<div className={styles.postDetails_container}>
				<PostDetails />
			</div>
			<div className={styles.posts_container}>
				<Posts />
			</div>
		</div>
	);
}

export default Home;
