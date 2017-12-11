import React from 'react';
import '../css/spinner.css';

const Spinner = () => {
	return(
		<div className="spinner-container">
			<div id="cont">
			  <p>Loading...</p>
			  <div className="bubble"></div>
			  <div className="bubble"></div>
			  <div className="bubble"></div>
			</div>
		</div>
	)
}

export default Spinner;