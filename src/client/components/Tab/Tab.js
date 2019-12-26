import React, { Component } from 'react';
import * as Styles from './Tab.styles';

export default class Tab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1
		};
	}

	render() {
		return (
			<div className='tabs is-center is-toggle-rounded'>
				<ul>
					<li className={this.state.activeTab === 1 && 'is-active'}>
						<a
							onClick={() => {
								this.setState({ activeTab: 1 });
								document.getElementById('brandlist').style.display = 'flex';
								document.getElementById('techlist').style.display = 'none';
							}}
						>
							Credentials
						</a>
					</li>
					<li className={this.state.activeTab != 1 && 'is-active'}>
						<a
							onClick={() => {
								this.setState({ activeTab: 2 });
								document.getElementById('brandlist').style.display = 'none';
								document.getElementById('techlist').style.display = 'flex';
							}}
						>
							Technologies
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
