import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';
import {getCtr} from '../js';

class TextEditor extends React.Component{

	setMemeText = (e)=> {
		e.preventDefault();

		let txt = this.refs.textValue.value;
		this.props.dispatch(actions.edit_text(txt));

		// Get Canvas Center
		let ctr = getCtr();
		// Change Text Position to Canvas Center
		this.props.dispatch(actions.edit_posX(ctr.x));
		this.props.dispatch(actions.edit_posY(ctr.y));

		this.props.toggle();
	}

	render(){
		return(
			<article className="text-editor">
				<div className="x-close text-close" onClick={this.props.toggle}><span>X</span></div>
				<form id="text-form">
					<input type="text" id="inp-txt-add" placeholder="Enter Text Here" ref="textValue" />
					<button type="click" id="btn-txt-submit" onClick={this.setMemeText}>submit</button>
					
				</form>	
			</article>
		)
	}
}

const mapStateToProps = (state, props) => ({
	memeTxt: state.txt
})

export default connect(mapStateToProps)(TextEditor);