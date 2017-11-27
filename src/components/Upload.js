import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

import '../css/upload.css';

class Upload extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			imgError: false
		}
	}

	clickUpload = () => {
		document.getElementById('btn-file').click();
	}

	setImgErr = () => {
		this.setState({
			imgError: true
		})
	}

	unsetImgErr = () => {
		this.setState({
			imgError: false
		})
	}

	fileChangeHandler = (e) => {
		let file = e.target.files[0];
		
		let reader = new FileReader();
		reader.onload = () => {
			let dataURL = reader.result;
			this.props.dispatch(actions.set_image_url(dataURL));
			if(this.props.dataURL){
				this.unsetImgErr();
				this.props.history.push('/set-background');
			} else{
				this.setImgErr();
			}
		}
		try{
			reader.readAsDataURL(file);
		}
		catch(err){
			this.setImgErr();
			console.log(err);
		}
	}

	render(){
		let iErr = this.state.imgError ? <p className="img-error">...hmm, try again...</p> : undefined;
		return(
			<section className="upload-overlay">
				<input type="file" accept="image/*" id="btn-file" onChange={this.fileChangeHandler} />
				<div className="upload-btn-wrapper">
					<button className="btn-upload btn-main" onClick={this.clickUpload}>Upload Image</button>
					{iErr}
				</div>
			</section>
		)
	};
};

const mapToState = (state, props) => ({
	dataURL: state.dataURL
});

export default connect(mapToState)(Upload);