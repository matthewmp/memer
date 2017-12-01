import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

import '../css/fonts.css';

class Fonts extends React.Component{

	setFont = (e) => {
		let font = window.getComputedStyle(e.target).getPropertyValue("font-family");
		
		this.props.dispatch(actions.edit_font(font));
		
		this.props.toggle();
	}

	render(){
		return(
			<article className="font-selector">
				<div className="x-close" onClick={this.props.toggle}>X</div>
				<p className="select-font p-text"> Select Font </p>
				<ul>
					
					<li onClick={this.setFont}> Frijole </li>
					<li onClick={this.setFont}> Bangers </li>
					<li onClick={this.setFont}> Creepster </li>
					<li onClick={this.setFont}> Impact </li>
					<li onClick={this.setFont}> Ceviche One </li>
					<li onClick={this.setFont}> Rationale </li>
					<li onClick={this.setFont}> Spicy Rice </li>
					<li onClick={this.setFont}> Syncopate </li>
				</ul>
			</article>
		)
	}
}

const mapStateToProps = (state, props) => ({
	font: state.font
})

export default connect(mapStateToProps)(Fonts);