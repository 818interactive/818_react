import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

import '../css/about.css';

export default class About extends Component {
	render() {
		return (
			<div id="about">
				<p className="about">About</p>
				<hr style={{width: "50%", marginBottom: "12px"}}/>
				<Grid>
					{/*<Grid.Row columns={2}>
						<Grid.Column>
							<Image src='/images/design2.jpg' />
						</Grid.Column>
						<Grid.Column>
							<Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
						</Grid.Column>
					</Grid.Row>*/}
				</Grid>
			</div>
		);
	}
}
