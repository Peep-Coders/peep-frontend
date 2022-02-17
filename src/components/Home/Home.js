import React from 'react';

import PostDetails from '../PostDetails/PostDetails';
import Navigation from '../Navigation/Navigation';
import Posts from '../Posts/Posts';
import CreatePost from '../CreatePost/CreatePost'

function Home(props) {

    return (
        <div>
             <CreatePost></CreatePost>
            <PostDetails></PostDetails>
            <Posts></Posts>
        </div>
    );
}

export default Home;