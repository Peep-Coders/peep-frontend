import React , {useState} from 'react';
import { Link,  } from 'react-router-dom';
import styles from './Navigation.module.css';
import API_URL from '../../apiConfig';
import Logo from './logo.png'
import { Navigate, useNavigate } from 'react-router-dom';

function Navigation({setLoggedIn, loggedIn}, props) {

	const navigate = useNavigate();

	const handleLogout = async () => {
		// console.log(localStorage.getItem('token'));
		// console.log(props)
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				// alert('You have been logged out!');
				setLoggedIn(false);
				// setUserInfo(null);
				localStorage.removeItem('token');
				navigate('/about');
				
			}
		} catch (err) {
			console.log(err);
		}
	};
	
	return (
	<header class="shadow-sm">
	<div
    class="flex justify-between items-center h-16 max-w-screen px-4 mx-auto sm:px-6 lg:px-8"
  	>
		{/* Make it rounder + a home button possibly */}
	<a href='../'>
	<img src={Logo} alt="logo" class="flex max-h-16 rounded-lg"/>
	</a>
	<div class='flex items-center'>
			<div>
				<a href="../" class='no-underline'>
				<button>
					<Link to='../'>
						<a  class="px-5 py-2 text-sm font-medium bg-gray-100 rounded-lg text-blue-600" href="../About">Posts</a>
					</Link>
				</button>
				</a>
			</div>
			<div></div>
			<div>
				<a href="../Profile" class='no-underline'>
				<button>
					<Link to='../Profile'>
						<a  class="px-5 py-2 text-sm font-medium bg-gray-100 rounded-lg text-blue-600" href="../About">Profile</a>
					</Link>
				</button>
				</a>
			</div>
			<div>
				<a href="../About" class='no-underline'>
				<button>
					<Link to='../About'>
						<a  class="px-5 py-2 text-sm font-medium bg-gray-100 rounded-lg text-blue-600" href="../About">About</a>
					</Link>
				</button>
				</a>
			</div>
	  <a
        class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
        href="../Login"
      > 
				{loggedIn ? (
					<>
						{/* LOG OUT BUTTON */}
						<button onClick={handleLogout} class='class="text-blue-600"'>
							Logout
						</button>
					</>
				) : (
					<>
						{/* LOG IN BUTTON */}
						<button class="text-blue-600">
							<Link to='../Login' class='no-underline'>
								Login
							</Link>
						</button>
					</>
				)}
				</a>
	  {/* For Sign up add conditional, IF Logged in remove the sign up from the UI */}
	  <a
        class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg no-underline block"
        href="../Register"
      >
        Register
      </a>
  </div>
  </div>
</header>
	);
}

export default Navigation;
