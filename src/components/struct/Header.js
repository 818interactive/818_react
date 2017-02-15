import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory, Link } from 'react-router';

import '../css/struct.css'

export default class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeItem: 'home'
		}
	}

	handleItemClicked=(e, { name })=> {
		this.redirectRoute(name);
		this.setState({ activeItem: name })
	}

	redirectRoute(name){
		setTimeout(()=>{ browserHistory.push('/'+ name) },0);
	}

	render() {
		const { activeItem } = this.state
		return (
			<div id="header">
				<div className="web">
					<Menu pointing inverted secondary>
	          <Menu.Menu position='right'>
		          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClicked} />
		          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClicked} />
		          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClicked} />
	            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClicked} />
	          </Menu.Menu>
	        </Menu>
				</div>
				<div className="mobile">
					<ul>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Link to="/faq">Faq</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}
