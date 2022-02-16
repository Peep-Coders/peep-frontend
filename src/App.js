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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import PostDetails from './components/PostDetails/PostDetails'
import Posts from './components/Posts/Posts';
import Register from './components/Register/Register';
=======
<<<<<<< HEAD
=======
>>>>>>> 8503c5d (Posts view all sample posts)
import Register from './components/Register/Register';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';
<<<<<<< HEAD
=======
import PostDetails from './components/PostDetails/PostDetails'
import Posts from './components/Posts/Posts';
>>>>>>> 9e316dd (frontend for making post with images)
>>>>>>> 51fe654 (frontend for making post with images)
=======
>>>>>>> 8503c5d (Posts view all sample posts)
=======
=======
>>>>>>> a4f4bf3 (front end submit image and description post)
import Register from './components/Register/Register';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';
=======
<<<<<<< HEAD
=======
>>>>>>> 96aa50f (front end submit image and description post)
import PostDetails from './components/PostDetails/PostDetails'
import Posts from './components/Posts/Posts';
import Register from './components/Register/Register';
<<<<<<< HEAD
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
>>>>>>> 6f6b76e (front end image and description submit)
>>>>>>> c373893 (front end image and description submit)
<<<<<<< HEAD
>>>>>>> 3dff65f (front end image and description submit)
=======
=======
>>>>>>> 96aa50f (front end submit image and description post)
>>>>>>> a4f4bf3 (front end submit image and description post)

function App() {
  return (
		<>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/about' element={<About />} />
				<Route path='/comments' element={<Comments />} />
				<Route path='/header' element={<Header />} />
				<Route path='/logout' element={<Logout />} />
				<Route path='/people' element={<People />} />
<<<<<<< HEAD
<<<<<<< HEAD
				<Route path='/postdetails' element={<PostDetails/>} />
				<Route path='/posts' element={<Posts />} />
=======
<<<<<<< HEAD
				{/* <Route path='/post' element={<Post />} /> */}
				<Route path='/postDetails' element={<PostDetails />} />
=======
				<Route path='/postdetails' element={<PostDetails/>} />
				<Route path='/posts' element={<Posts />} />
>>>>>>> 9e316dd (frontend for making post with images)
>>>>>>> 51fe654 (frontend for making post with images)
=======
				<Route path='/postdetails' element={<PostDetails/>} />
				<Route path='/posts' element={<Posts />} />
>>>>>>> 8503c5d (Posts view all sample posts)
			</Routes>
			<Footer />
		</>
	);
}

export default App;
