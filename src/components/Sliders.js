import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import '../css/sliders.css';

class Sliders extends React.Component{

	componentDidMount(){
		// var inpX = document.getElementById('inpX');
		// var inpY = document.getElementById('inpY');
		// var canvas = document.getElementById('canvas');
		// inpX.setAttribute('max', canvas.width);
		// inpY.setAttribute('max', canvas.height);
	}

	setFontSize = () => {
		let fontSize = this.refs.fontSize.value;
		this.props.dispatch(actions.edit_font_size(fontSize));
	}

	moveUp = () => {
		this.props.dispatch(actions.move_up());
	}

	moveDown = () => {
		this.props.dispatch(actions.move_down());
	}

	moveRight = () => {
		this.props.dispatch(actions.move_right());
	}

	moveLeft = () => {
		this.props.dispatch(actions.move_left());
	}

	// setPosX = () => {
	// 	let posX = this.refs.fontPosX.value;
	// 	this.props.dispatch(actions.edit_posX(posX));
	// }

	// setPosY = () => {
	// 	let posY = this.refs.fontPosY.value;
	// 	this.props.dispatch(actions.edit_posY(posY));
	// }

	render() {
		
		return(
			<section className="select-sliders">
			<div className="x-close" onClick={this.props.toggle}>X</div>
				<div className="sliders-wrapper">
					<div className="arrow-up" onClick={this.moveUp}>
						<i className="fa fa-arrow-circle-up pos-chev" aria-hidden="true"></i>
					</div>
					<div className="arrow-l-r">
						<i className="fa fa-arrow-circle-left pos-chev" aria-hidden="true" onClick={this.moveLeft}></i>
						<i className="fa fa-arrow-circle-right pos-chev" aria-hidden="true" onClick={this.moveRight}></i>
					</div>
					<div className="arrow-down" onClick={this.moveDown}>
						<i className="fa fa-arrow-circle-down pos-chev" aria-hidden="true"></i>
					</div>


					{/*<form id="slidersForm">
						<div className="wrapper-font-size-slider">
							<label className="lbl-slider"> 
								<i className="fa fa-text-height pos-scale" aria-hidden="true"></i>
							</label>
							<input type="range" ref="fontSize" className="inp-slider" 
							min="25" max="200" step="0.1" 
							onChange={this.setFontSize} />
						</div>

						<div className="wrapper-font-posX-slider">
							<label className="lbl-slider"> 
								<i className="fa fa-arrow-circle-left pos-chev" aria-hidden="true"></i>
								<i className="fa fa-arrow-circle-right pos-chev" aria-hidden="true"></i>
							</label>
							<input type="range" ref="fontPosX" className="inp-slider" 
							min="0" max="100" id="inpX"
							onChange={this.setPosX} />
						</div>

						<div className="wrapper-font-posY-slider">
							<label className="lbl-slider"> 
								<i className="fa fa-arrow-circle-up pos-chev" aria-hidden="true"></i>
								<i className="fa fa-arrow-circle-down pos-chev" aria-hidden="true"></i>
							</label>
							<input type="range" ref="fontPosY" className="inp-slider" 
							min="0" max="100" id="inpY"
							onChange={this.setPosY} />
						</div>
					</form>*/}
				</div>	
			</section>
		)
	}
}

const mapStateToProps = (state, props) => ({
	posX: state.posX,
	posY: state.posY
});

export default connect(mapStateToProps)(Sliders);