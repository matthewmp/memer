import React from 'react';
import {connect} from 'react-redux';

import * as cfs from '../js';
import '../css/canvas.css';

class Canvas extends React.Component{


	componentDidMount(){
		let that = this;
		window.addEventListener('resize', function(){
			cfs.loadCanvas(that.props.state);
		})
		cfs.loadCanvas(this.props.state);
		
	}

	componentDidUpdate(){
		cfs.loadCanvas(this.props.state);	
		
	}

	// componentWillUpdate(){
	// 	cfs.loadCanvas(this.props.state);

	// }

	render(){
		return(
			<canvas id="canvas"></canvas>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(Canvas);