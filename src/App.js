import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Navigation from './components/Navigation/Navigation';
import People from './components/People/People';
import Register from './components/Register/Register';
// import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
		<>
			<Navigation />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/about' element={<About />} />
				<Route path='/comments' element={<Comments />} />
				<Route path='/header' element={<Header />} />
				<Route path='/logout' element={<Logout />} />
				<Route path='/people' element={<People />} />
				{/* <Route path='/post' element={<Post />} /> */}
				<Route path='/postDetails' element={<PostDetails />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
