import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

import Menu from './Menu';
import '../css/background.css';
class Background extends React.Component{

	selectColor = (e) => {
		let bgColor = window.getComputedStyle(e.target)
		.getPropertyValue("background-color");

		this.props.dispatch(actions.set_bg_color(bgColor));
		this.next();
	}

	next = () => {
		this.props.history.push('/editor');
	}

	render(){
		return(
			<section className="select-background">
				<Menu />
				<p className="p-select-background">
					Select Background
					<span className="p-background-message">
						(appears if image is too small to fit screen)
					</span>
				</p>

				<div className="bg-color-palette-container">
					<div className="bg-color-palette-wrapper">
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
						<div className="bg-color" onClick={this.selectColor}></div>
					</div>
				</div>
			</section>
		)
	}
}

const mapToState = (state, props) => ({
	bgColor: state.bgColor
})

export default connect(mapToState)(Background);


