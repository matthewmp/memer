import React from 'react';

import Img from './Img';
import Spinner from './Spinner';
import '../css/slideshow.css';

export default class Slideshow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loaded: 0
		}
	}

	inc = () => {
		if(this.state.loaded > 54){return}
		this.setState({
			loaded: this.state.loaded + 1
		})
	}

	render(){
		let spinerOrSlider = this.state.loaded > 54 ? undefined : <Spinner />;
		let images = [];
		for(let i = 0; i < 56; i++){
			let ranNum = Math.ceil(Math.random(1) * 18);
			images.push(<Img src={require(`../images/${ranNum}meme.jpg`)} load={this.inc} key={i} />);
		}
		
		return(

			<section className="slideshow-container">
				{spinerOrSlider}
				<div className="slider">
					{images}
				</div>
			</section>
		)
	}
}

