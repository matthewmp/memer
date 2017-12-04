import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import '../css/stroke.css';

class Stroke extends React.Component{

	setStroke = () => {
		let stroke = this.refs.stroke.value;
		this.props.dispatch(actions.edit_stroke(stroke))
	};

	setFontSize = () => {
		let fontSize = this.refs.fontSize.value;
		this.props.dispatch(actions.edit_font_size(fontSize));
	};

	render() {
		return(
			<section className="select-stroke">
			<div className="x-close" onClick={this.props.toggle}><span>X</span></div>
				<div className="stroke-wrapper">
					<form id="strokeForm">
						<div className="wrapper-stroke-slider">
							<label className="lbl-slider"> Stroke Size </label>
							<input type="range" ref="stroke" className="inp-slider" 
							min="0" max="10"
							onChange={this.setStroke} />
						</div>

						<div className="wrapper-font-size-slider">
							<label className="lbl-slider"> 
								Font Size
							</label>
							<input type="range" ref="fontSize" className="inp-slider" 
							min="25" max="200" step="0.1" 
							onChange={this.setFontSize} />
						</div>
					</form>
				</div>	
			</section>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state: state
});

export default connect(mapStateToProps)(Stroke);