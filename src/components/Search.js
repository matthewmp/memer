import React from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';

import Img from './Img';
import Preview from './Preview';
import Menu from './Menu';
import Spinner from './Spinner';
import KEY from '../config';
import '../css/search.css';

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			prev: false,
			spinner: false,
			searchResults: true,
			preview: ''
		}
	}

	search = (e) =>{
		this.toggleSpinner();
		let query = this.refs.inp.value;
		let that = this;
		e.preventDefault();
		
		const url = `https://api.pexels.com/v1/search?query=${query}`;
		fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': KEY
			}
		})
		.then(response => response.json())
		.then(function(results){
			let count = results.total_results;
			if(count <= 0){
				that.setState({searchResults: 0})
				that.toggleSpinner();
				return;
			}
			that.setState({searchResults: results})
			that.toggleSpinner();
		})
		.catch(err => console.log(err))
	}

	selectImg = (id) => {
		let that = this;
		if(id === false){
			that.setState({preview: ''})
		}
		else{
			const imgURL = this.state.searchResults.photos.filter((photo) => photo.id === id)[0].src.large;
				that.setState({preview: imgURL})
				that.togglePrev();
		}
	}

	togglePrev = () => {
		this.setState({
			prev: !this.state.prev
		})
	}

	toggleSpinner = () => {
		this.setState({
			spinner: !this.state.spinner
		})
	}

	render(){
		console.log('test');
		let spinner = this.state.spinner ? <Spinner /> : undefined;
		let noResults = this.state.searchResults ? undefined : <div className="no-results">Hmm We Could Not Find Anything...</div>
		let results;
		let preview = (this.state.preview && this.state.prev) ? <Preview src={this.state.preview} toggle={this.togglePrev} /> : undefined;
		try{
			if(this.state.searchResults.photos){	
				let imgArr = this.state.searchResults.photos;
				results = imgArr.map((elem) => {
					return <Img src={elem.src.small} 
							key={elem.id} 
							click={this.selectImg.bind(this, elem.id)} /> || undefined;
				})
			}
		}catch(err){
			console.log(err);
		}

		return(
			<section className="search">
				{spinner}
				<Menu />
				<div className="search-bar-wrapper">
					<form id="searchForm" onSubmit={this.search}>
						<input type="text" placeholder="Search Images" ref="inp" />
						<button type="submit" className="btn-search">
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>
				</div>
				<div className="search-results-wrapper">
					{preview}
					{results}
					{noResults}
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => ({
	state: state
})

export default connect(mapStateToProps)(Search);