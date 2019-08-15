import React from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';

import Img from './Img';
import Preview from './Preview';
import Menu from './Menu';
import Spinner from './Spinner';

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
		
		const url = `http://cors.io/?https://api.gettyimages.com/v3/search/images?phrase=${query}`;
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Api-Key': 'zegr8sckp828ess93vx56b6j'
			}
		})
		.then(response => response.json())
		.then(function(results){
			let count = results.result_count;
			if(count <= 0){
				that.setState({searchResults: 0})
				that.toggleSpinner();
				return
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
			const url = `http://cors.io/?https://api.gettyimages.com/v3/images/?ids=${id}&fields=display_set`;
			fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Api-Key': 'zegr8sckp828ess93vx56b6j'
				}
			})
			.then(response => response.json())
			.then(function(results){
				let imgURL = results.images[0].display_sizes[0].uri;
				that.setState({preview: imgURL})
				that.togglePrev();
			})
			.catch(err => console.log(err))
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
		let spinner = this.state.spinner ? <Spinner /> : undefined;
		let noResults = this.state.searchResults ? undefined : <div className="no-results">Hmm We Could Not Find Anything...</div>
		let results;
		let preview = (this.state.preview && this.state.prev) ? <Preview src={this.state.preview} toggle={this.togglePrev} /> : undefined;
		try{
			if(this.state.searchResults.images){	
				let imgArr = this.state.searchResults.images;
				results = imgArr.map((elem) => {
					return <Img src={elem.display_sizes[0].uri} 
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