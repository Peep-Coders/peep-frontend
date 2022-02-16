import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Posts from './components/Posts/Posts';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home></Home>
      <Posts></Posts>
    </div>
  );
}

export default App;
