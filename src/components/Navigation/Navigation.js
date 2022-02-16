import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
        <div>
                <nav>
                    <Link to="../Login"> Login </Link>
                    <Link to="../About"> About </Link>
                    <Link to="../People"> People </Link>
                </nav>
        </div>
    );
}

export default Navigation;