import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './FooterNav.styles';

export default class FooterNav extends Component {
	state = {
		dropDownActive: false
	};

	render() {
		return (
			<Styles.FooterNav>
				<Styles.FooterNavWrapper className='footer-nav__one'>
					<Styles.FooterNavContent className='columns is-centered is-multiline'>
						<li className='column is-narrow'>
							<Link to='/'>About</Link>
						</li>
						<li className='column is-narrow'>
							<Link to='/'>Contact us</Link>
						</li>
						<li className='column is-narrow'>
							<Link to='/'>We're hiring</Link>
						</li>
					</Styles.FooterNavContent>
				</Styles.FooterNavWrapper>
			</Styles.FooterNav>
		);
	}
}
