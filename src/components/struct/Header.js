import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

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
				
				</div>
			</div>
		);
	}
}
