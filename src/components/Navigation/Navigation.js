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
    class="flex items-center justify-between h-16 max-w-screen px-4 mx-auto"
  	>
		{/* Make it rounder + a home button possibly */}
	<img src={Logo} alt="logo" class="flex max-h-14"/>
	<div class="flex flex-1 w-0 lg:hidden">
      <button class="p-2 text-gray-600 bg-gray-100 rounded-full" type="button">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </button>
    </div>
      <form class="hidden mb-0 lg:flex ml-5">
        <div class="relative">
          <input
            class="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
            placeholder="Search..."
            type="text"
          />

          <button
            class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
            type="submit"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
	  </div>
			<div className={styles.btnContainer}>
				<button className={styles.nav_button}>
					<Link to='../' className={styles.linktag}>
						{' '}
						<a class="text-gray-900 no-underline" href="../Posts">
						Home{' '}
						</a>
					</Link>
				</button>
			
				<a class="text-gray-900" href="../About">
				<button className={styles.nav_button}>
					<Link to='../About' className={styles.linktag}>
						<a class="text-gray-900 no-underline" href="../About">About</a>
					</Link>
				</button>
				</a>
			<div class="items-center hidden space-x-4 lg:flex">
	    <div class="items-center hidden space-x-4 lg:flex"> 
	  <a
        class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
        href="../Login"
      > 
				{loggedIn ? (
					<>
						{/* LOG OUT BUTTON */}
						<button onClick={handleLogout} className={styles.nav_button}>
							Logout
						</button>
					</>
				) : (
					<>
						{/* LOG IN BUTTON */}
						<button className={styles.nav_button}>
							<Link to='../Login' className={styles.linktag}>
								Login
							</Link>
						</button>
					</>
				)}
				</a>
	  {/* For Sign up add conditional, IF Logged in remove the sign up from the UI */}
	  <a
        class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg no-underline"
        href="../Register"
      >
        Sign up
      </a>
			</div>
		</div>
	</div>
   <div class="border-t border-gray-100 lg:hidden">
 
  </div>
</header>
	);
}

export default Navigation;
