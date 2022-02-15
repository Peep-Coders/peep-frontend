import React from 'react';
import Login from '../Login/Login';

function Logout({ handleLogin }) {

    const UserLogout = () => {
        handleLogin.clear();
        window.location.href = '/login'
    }
    return (
        <div>
            <button onClick={UserLogout}>Logout</button>
            
        </div>
    );
}

export default Logout;