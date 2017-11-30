import React from 'react';

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
		
		this.setState({
			loaded: this.state.loaded + 1
		})
	}

	render(){
		console.log(this.state);
		let spinerOrSlider = this.state.loaded >= 56 ? undefined : <Spinner />;
		return(
			<section className="slideshow-container">
				{spinerOrSlider}
				<div className="slider">
					<img className="slide" src={require('../images/1meme.jpg')} onLoad={this.inc}/>
					<img className="slide" src={require('../images/5meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/2meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/6meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/7meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/8meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/9meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/3meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/10meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/11meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/12meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/13meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/14meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/4meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/15meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/16meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/17meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/18meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/1meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/2meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/3meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/4meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/5meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/6meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/7meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/8meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/9meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/10meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/11meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/12meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/13meme.jpg')}  onLoad={this.inc}/>
					<img className="slide" src={require('../images/14meme.jpg')}  onLoad={this.inc}/>
					<img className="slide" src={require('../images/15meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/16meme.jpg')} onLoad={this.inc} />
					<img className="slide" src={require('../images/17meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/18meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/1meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/5meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/2meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/6meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/7meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/8meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/9meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/3meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/10meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/11meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/12meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/13meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/14meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/4meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/15meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/16meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/17meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/18meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/1meme.jpg')}  onLoad={this.inc} />
					<img className="slide" src={require('../images/2meme.jpg')}  onLoad={this.inc} />

				</div>
			</section>
		)
	}
}

