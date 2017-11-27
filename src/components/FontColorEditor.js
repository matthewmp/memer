import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

import '../css/fontColor.css';
class Background extends React.Component{

	selectColor = (e) => {
		let fontColor = window.getComputedStyle(e.target)
		.getPropertyValue("background-color");
		
		this.props.dispatch(actions.set_font_color(fontColor));

		this.props.toggle();

	}

	
	render(){
		return(
			<section className="select-font-color">
			<div className="x-close" onClick={this.props.toggle}>X</div>
				<div className="font-color-palette-wrapper">
					<p className="p-select-font-color">
						Select Font Color
					</p>
					
					<div className="font-color" onClick={this.selectColor}></div>
					<div className="font-color" onClick={this.selectColor}></div>
					<div className="font-color" onClick={this.selectColor}></div>
					<div className="font-color" onClick={this.selectColor}></div>
					<div className="font-color" onClick={this.selectColor}></div>
					<div className="font-color" onClick={this.selectColor}></div>
					<div className="font-color" onClick={this.selectColor}></div>
					
				</div>
			</section>
		)
	}
}

const mapToState = (state, props) => ({
	fontColor: state.fontColor
})

export default connect(mapToState)(Background);


