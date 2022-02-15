import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
		<div>
			<body>
				<Home/>
			</body>
      <footer>
        <Footer/>
      </footer>
		</div>
	);
}

export default App;
