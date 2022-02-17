import React from 'react';

import PostDetails from '../PostDetails/PostDetails';
import Navigation from '../Navigation/Navigation';
import Posts from '../Posts/Posts';
import CreatePost from '../CreatePost/CreatePost';
import styles from './Home.module.css';

function Home(props) {
	return (
		<div className={styles.home_main}>
				<PostDetails />
				<Posts />
		</div>
	);
}

export default Home;
