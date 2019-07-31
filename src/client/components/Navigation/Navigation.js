import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './Navigation.styles';

export default class Navigation extends Component {
	render() {
		return (
			<Styles.MobileNav>
				<div>
					<ul className='mobile-navigation__list'>
						<li>
							<Link to='/'>Facebook</Link>
						</li>
						<li>
							<Link to='/'>Tweeter</Link>
						</li>
						<li>
							<Link to='/'>Contact</Link>
						</li>
					</ul>
				</div>
			</Styles.MobileNav>
		);
	}
}
