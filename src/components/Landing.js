import React from 'react';
import {Link} from 'react-router-dom';
import '../css/landing.css';


const Landing = () => {


	return (
		<div>
			<div className="landing-upper">
				<div className="slideshow"></div>

			</div>

			<div className="landing-lower">
				<Link to="/upload">
					<button type="butotn" className="btn-get-started">Get Started</button>
				</Link>
			</div>
		</div>	
	)
};

export default Landing;