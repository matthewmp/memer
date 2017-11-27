import React from 'react';

import '../css/slideshow.css';

const Slideshow = () => {
	return(
		<section className="slideshow-container">
			<div className="slider">
				<img className="slide" src={require('../images/1meme.png')} />
				<img className="slide" src={require('../images/2meme.png')} />
				<img className="slide" src={require('../images/3meme.png')} />
				<img className="slide" src={require('../images/4meme.png')} />
			</div>
		</section>
	)
}

export default Slideshow;