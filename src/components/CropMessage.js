import React from 'react';

export default class CropMessage extends React.Component{
	render(){
		return(
			<div className="crop-message">
				Add Text First
				<span>
					<i className="fa fa-check fa-lg" aria-hidden="true" onClick={this.props.toggle}></i>
				</span>
			</div>
		)
	}
}