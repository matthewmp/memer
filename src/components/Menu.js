import React from 'react';
import {Link} from 'react-router-dom';
import '../css/menu.css';

export default class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showMenu: false,
			count: 0
		}
	}
	toggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu,
			count: 1
		})
	}
	render(){
		let classes;
		let menuColor;
		if(this.state.showMenu){classes = 'slide-menu'; menuColor = 'menu-white';} 
		else if(!this.state.showMenu && !this.state.count){
			classes = 'hidden';
			menuColor = 'hb-line';
		}
		else {classes = 'hide-slide'; menuColor='hb-line'}
		
		return(
			<div className="menu-wrapper">
				<div className="hb-menu" onClick={this.toggleMenu}>
					<div className={menuColor}></div>
					<div className={menuColor}></div>
					<div className={menuColor}></div>
				</div>

				<div className={classes} ref="slideMenu">
					<Link to="/">
						<div className="menu-item-wrapper">
							<i className="fa fa-home menu-item" aria-hidden="true" title="Home"></i>
						</div>
					</Link>	
					<Link to="/upload">
						<div className="menu-item-wrapper">
							<i className="fa fa-upload menu-item" aria-hidden="true" title="Upload Image"></i>
						</div>
					</Link>
					<Link to="/set-background">
						<div className="menu-item-wrapper">
							<i className="fa fa-file-image-o menu-item" aria-hidden="true" title="Background Color"></i>
						</div>
					</Link>
					<Link to="/editor">
						<div className="menu-item-wrapper">
							<i className="fa fa-tasks menu-item" aria-hidden="true" alt="sdf" title="Editor"></i>
						</div>
					</Link>
					<div className="menu-item-wrapper gh">
						<a href="https://github.com/mmpal78/memer">
							<i className="fa fa-github-square menu-item" aria-hidden="true" alt="sdf" title="Code"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

