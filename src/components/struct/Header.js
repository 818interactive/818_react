import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import '../css/struct.css'

export default class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeItem: 'home'
		}
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state
		return (
			<div id="header">
				<Menu pointing inverted secondary>
          <Menu.Menu position='right'>
	          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
	          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
	          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
			</div>
		);
	}
}
