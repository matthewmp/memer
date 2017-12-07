import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import Img from './Img';

import * as actions from '../actions';

class Preview extends React.Component{

	setImage = () => {
		this.props.toggle();
		this.props.dispatch(actions.set_image_url(this.props.src));
		this.props.history.push('/set-background');
	}

	render(){
		return(
			<div className="preview-wrapper">
				<div className="x-close" onClick={this.props.toggle}><span>X</span></div>
				<Img  id="imgPreview" src={this.props.src} />
				<div className="select-image" onClick={this.setImage}><span>Select</span></div>
			</div>
		)
	}
}

const mapStateToProps = (state,props) => ({
	state: state
})

export default connect(mapStateToProps)(withRouter(Preview));