import React from 'react';
import Posts from '../Posts/Posts';
import Post from '../Post/Post';

function Home(props) {



    return (
        <div>
            <div>
                <Post></Post>
                <Posts></Posts>
            </div>
        </div>
    );
}

export default Home;