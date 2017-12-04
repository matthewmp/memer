import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import '../css/sliders.css';

class Sliders extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			interval: 0
		}
	};

	setInt = (fn) => {
		let interval = setInterval(fn, 100);
		this.setState({
			interval
		});
	};

	setFontSize = () => {
		let fontSize = this.refs.fontSize.value;
		this.props.dispatch(actions.edit_font_size(fontSize));
	};

	moveUp = () => {
		this.props.dispatch(actions.move_up());
	};

	moveDown = () => {
		this.props.dispatch(actions.move_down());
	};

	moveRight = () => {
		this.props.dispatch(actions.move_right());
	};

	moveLeft = () => {
		this.props.dispatch(actions.move_left());
	};

	keyDown = (e) => {
		e.preventDefault();
		let direction = e.target.classList[1];
		direction.search('up') >= 0 ? this.setInt(this.moveUp) : console.log('adjusting position');
		direction.search('down') >= 0 ? this.setInt(this.moveDown) : console.log('adjusting position');
		direction.search('left') >= 0 ? this.setInt(this.moveLeft) : console.log('adjusting position');
		direction.search('right') >= 0 ? this.setInt(this.moveRight) : console.log('adjusting position');
	};

	keyUp = (e) => {
		e.preventDefault();
		clearInterval(this.state.interval);
	};

	render() {
		
		return(
			<section className="select-sliders">
			<div className="x-close" onClick={this.props.toggle}><span>X</span></div>
				<div className="sliders-wrapper">
					<div className="arrow-up" onClick={this.moveUp} onMouseDown={this.keyDown} onMouseUp={this.keyUp}>
						<i className="fa fa-arrow-circle-up pos-chev" aria-hidden="true"></i>
					</div>
					<div className="arrow-l-r">
						<i className="fa fa-arrow-circle-left pos-chev" aria-hidden="true" onClick={this.moveLeft} onMouseDown={this.keyDown} onMouseUp={this.keyUp}></i>
						<i className="fa fa-arrow-circle-right pos-chev" aria-hidden="true" onClick={this.moveRight} onMouseDown={this.keyDown} onMouseUp={this.keyUp}></i>
					</div>
					<div className="arrow-down" onClick={this.moveDown} onMouseDown={this.keyDown} onMouseUp={this.keyUp}>
						<i className="fa fa-arrow-circle-down pos-chev" aria-hidden="true"></i>
					</div>
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