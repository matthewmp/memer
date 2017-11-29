import React from 'react';
import {Link} from 'react-router-dom';

import Slideshow from './Slideshow';
import '../css/landing.css';


const Landing = () => {
	return (
		<div>
			<div className="landing-upper">
				<Slideshow />
				<div className="steps">Upload, MEME, Downlad</div>
			</div>

			<div className="landing-lower">
				<Link to="/upload">
					<button type="butotn" className="btn-get-started btn-main">Get Started</button>
				</Link>
			</div>
		</div>	
	)
};

export default Landing;