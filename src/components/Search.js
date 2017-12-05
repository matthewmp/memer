import React from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';

import * as actions from '../actions';

import Menu from './Menu';
import '../css/search.css';

class Search extends React.Component{
	// constructor(props){
	// 	super(props);
	// }

	search = (e) =>{
		e.preventDefault();
		console.log('Clicked')

		let results = this.props.dispatch(actions.searchImg('cat'));
		console.log(results)
	}

	render(){
		console.log(this.props.state);
		return(
			<section className="search">
				<Menu />
				<div className="search-bar-wrapper">
					<form id="searchForm" onSubmit={this.search}>
						<input type="text" placeholder="Search Images" refs="searchInp" />
						<button type="submit" className="btn-search">
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>
				</div>
				<div className="search-results-wrapper">

				</div>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state: state
})

export default connect(mapStateToProps)(Search);