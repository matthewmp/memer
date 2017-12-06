import React from 'react';

export default class Img extends React.Component{
	render(){
		return (
			<img className="slide" src={this.props.src} 
			onLoad={this.props.load} 
			onClick={this.props.click} 
			id={this.props.id} alt="meme" />
		)
	}
}

