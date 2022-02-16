import React from 'react';
import Posts from '../Posts/Posts';
import PostDetails from '../PostDetails/PostDetails';
import Navigation from '../Navigation/Navigation';

function Home(props) {



    return (
        <div>
            <div>
                <Navigation></Navigation>
                <PostDetails></PostDetails>
                <Posts></Posts>
            </div>
        </div>
    );
}

export default Home;