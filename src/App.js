import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Dashboard from './pages/Dashboard.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route path='/login' element={<Login />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/home' element={<Dashboard />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
