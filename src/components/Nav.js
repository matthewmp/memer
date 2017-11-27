import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';

const Nav = () => {
	return (
		<header>
			<nav>
				<Link to="/"> 
					<h3 className="logo">MEMER</h3>
				</Link>
				<h6 className="logo2">Meme Generator ...Image AWESOMEIFIER</h6>
			</nav>
		</header>
	)
}

export default Nav;