import React , {useState} from 'react';
import { Link,  } from 'react-router-dom';
import styles from './Navigation.module.css';
import API_URL from '../../apiConfig';
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
    class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto"
  	>
   

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
		<div className={styles.nav_bar}>
			<div className={styles.btnContainer}>
				<button className={styles.nav_button}>
					<Link to='../' className={styles.linktag}>
						{' '}
						Home{' '}
					</Link>
				</button>
				<button className={styles.nav_button}>
					<Link to='../About' className={styles.linktag}>
						About
					</Link>
				</button>
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
			</div>
		</div>
	</header>
	);
}

export default Navigation;
