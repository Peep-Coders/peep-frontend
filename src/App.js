import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import People from './components/People/People';
import Register from './components/Register/Register';
import Posts from './components/Posts/Posts'; 
import PostDetails from './components/PostDetails/PostDetails';

function App() {
	return (
		<div className='home_container'>
			<nav>
				<Navigation />
			</nav>
			<body>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/about' element={<About />} />
					<Route path='/comments' element={<Comments />} />
					<Route path='/people' element={<People />} />
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
