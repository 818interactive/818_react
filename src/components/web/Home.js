import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import '../css/home.css';

export default class Home extends Component {
	render() {
		return (
			<div id="home">
				<div className="overlay">
					<Grid>
						<Grid.Row>

							<Grid.Column width={5}>
								<span className="line"/>
							</Grid.Column>

							<Grid.Column width={9}>
								<p className="main">
									<span className="main_num">818</span> Interactive</p>
								<p className="design">Design Studio</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}
