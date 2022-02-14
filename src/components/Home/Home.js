import React from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import { Link } from 'react-router-dom';
//Import axios or backend interacting part here

function Home(props) {
    return (
        <div>
            <div>
                <Header></Header>
                <nav>
                    <Link to="../Login"> Login </Link>
                    <Link to="../About"> About </Link>
                    <Link to="../People"> People </Link>
                </nav>
                <Posts></Posts>
                <footer></footer>
            </div>
        </div>
    );
}

export default Home;