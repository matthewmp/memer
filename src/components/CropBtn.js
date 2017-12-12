import React from 'react';

export default class CropBtn extends React.Component{
	render(){
		return(
			<div className="crop" title="Crop" onClick={this.props.toggle}>
				<i className="fa fa-crop" aria-hidden="true"></i>
			</div>
		)
	}
}

