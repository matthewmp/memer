import React from 'react';
import {connect} from 'react-redux';
import '../css/cropper.css';

import * as actions from '../actions';
import * as can from '../js';

import CropMessage from './CropMessage';

class Cropper extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			message: false
		}
	}

	componentDidMount(){
		can.dragElement(this.refs.cropper);
	}

	toggleMess = () => {
		this.setState({
			message: !this.state.message
		})
	}

	cropIt = () => {
		if(this.props.state.txt){
			let clip = can.clip(this.refs.cropper);
			this.props.dispatch(actions.set_clip(clip));	
		}
		else{
			this.toggleMess();
		}
	}

	undoCrop = () => {
		this.props.dispatch(actions.set_clip({}));
	}

	render(){
		let message = this.state.message ? <CropMessage toggle={this.toggleMess} /> :  undefined;
		return(
			<div className="crop-wrapper" id="crop-wrapper" ref="cropper">

		        <div className="cropper" id="cropper">
		        	{message}
		        	<div className="x-close crop-close" onClick={this.props.toggle}><span>X</span></div>
		            <div className="dragger" id="dragger" ><span>Drag Here</span></div>
		            <div id="cropIt" onClick={this.cropIt}>
		            	<i className="fa fa-check" aria-hidden="true"></i>
		            </div>
		            <div className="undo-crop" onClick={this.undoCrop}>
		            	<i className="fa fa-undo" aria-hidden="true"></i>
		            </div>
		         </div>
	    	</div>
    	)
	}
}

const mapStateToProps = (state, props) => ({
	state: state
})

export default connect(mapStateToProps)(Cropper);