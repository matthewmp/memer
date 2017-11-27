import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import '../css/stroke.css';

class Stroke extends React.Component{

	setStroke = () => {
		let stroke = this.refs.stroke.value;
		console.log(stroke);
		this.props.dispatch(actions.edit_stroke(stroke))
	}

	render() {
		console.log('state: ', this.props.state);
		return(
			<section className="select-stroke">
			<div className="x-close" onClick={this.props.toggle}>X</div>
				<div className="stroke-wrapper">
					<form id="strokeForm">
						<div className="wrapper-stroke-slider">
							<label className="lbl-stroke"> S </label>
							<input type="range" ref="stroke" className="inp-slider" 
							min="0" max="10"
							onChange={this.setStroke} />
						</div>
					</form>
				</div>	
			</section>
		)
	}
}

const mapStateToProps = (state, props) => ({
	// fontSize: state.fontSize,
	// posX: state.posX,
	// posY: state.posY
	state: state
});

export default connect(mapStateToProps)(Stroke);