import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Posts from './components/Posts/Posts'; 
import PostDetails from './components/PostDetails/PostDetails';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	// const handleSetLoggedIn = (token) => {
	// 	localStorage.setItem('token', token);
	// 	// getUserInfo();
	// 	console.log(localStorage.getItem('token'));
	// 	setLoggedIn(true);
	// };
	return (
		<div className='home_container'>
			<nav>
				<Navigation setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
			</nav>
			<body>
				<Routes>
					<Route index path='/' element={<Home loggedIn={loggedIn} />} />
					<Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
					<Route path='/register' element={<Register />} />
					<Route path='/about' element={<About />} />
					<Route path='/comments' element={<Comments />} />
					<Route path='/post' element={<Posts />} />
					<Route path='/postDetails' element={<PostDetails />} />
				</Routes>
			</body>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
