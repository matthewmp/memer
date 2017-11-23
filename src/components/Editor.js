import React from 'react';
import {connect} from 'react-redux';

import '../css/editor.css';
import '../css/tools.css';

class Editor extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			showTextEditor: false
		}
	}

	toggleTextEditor = () => {
		this.setState({
			showTextEditor: !this.state.showTextEditor
		})
	}

	submitText = (e) =>{
		e.preventDefault();
		console.log(this.refs.textValue.value);
	}

	render(){
		return(
			<section className="editor">
				<div className="upper-editor">

				</div>

				<div className="lower-editor">
					<div className="toolbar-wrapper">
						<article className="edit-text tool" onClick={this.toggleTextEditor}>
							<p className="tool-icon">T</p>
						</article>
						<article className="edit-font tool">
							<p className="tool-icon">F</p>
						</article>
						<article className="edit-color tool">
							<p className="tool-icon">C</p>
						</article>
						<article className="edit-font-size-position tool">
							<p className="tool-icon">P</p>
						</article>
						<article className="edit-stroke tool">
							<p className="tool-icon">S</p>
						</article>
					</div>
				</div>
				<article className="text-editor">
					<form id="text-form">
						<input type="text" placeholder="Enter Text Here" ref="textValue" />
						<button type="click" onClick={this.submitText}>submit</button>
					</form>	

				</article>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state: state
})

export default connect(mapStateToProps)(Editor);


