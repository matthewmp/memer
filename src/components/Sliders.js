import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import '../css/sliders.css';

class Sliders extends React.Component{

	componentDidMount(){
		var inpX = document.getElementById('inpX');
		var inpY = document.getElementById('inpY');
		var canvas = document.getElementById('canvas');
		inpX.setAttribute('max', canvas.width);
		inpY.setAttribute('max', canvas.height);
	}

	setFontSize = () => {
		let fontSize = this.refs.fontSize.value;
		this.props.dispatch(actions.edit_font_size(fontSize))
	}

	setPosX = () => {
		let posX = this.refs.fontPosX.value;
		this.props.dispatch(actions.edit_posX(posX));
	}

	setPosY = () => {
		let posY = this.refs.fontPosY.value;
		this.props.dispatch(actions.edit_posY(posY));
	}

	render() {
		
		return(
			<section className="select-sliders">
			<div className="x-close" onClick={this.props.toggle}>X</div>
				<div className="sliders-wrapper">
					<p className="position-text"> Position Text </p>
					<form id="slidersForm">
						<div className="wrapper-font-size-slider">
							<label className="lbl-slider"> Size </label>
							<input type="range" ref="fontSize" className="inp-slider" 
							min="25" max="200" step="0.1" 
							onChange={this.setFontSize} />
						</div>

						<div className="wrapper-font-posX-slider">
							<label className="lbl-slider"> Position X </label>
							<input type="range" ref="fontPosX" className="inp-slider" 
							min="0" max="100" id="inpX"
							onChange={this.setPosX} />
						</div>

						<div className="wrapper-font-posY-slider">
							<label className="lbl-slider"> Position Y </label>
							<input type="range" ref="fontPosY" className="inp-slider" 
							min="0" max="100" id="inpY"
							onChange={this.setPosY} />
						</div>
					</form>
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