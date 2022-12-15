import React, { Component } from 'react';
import Button from '../Button/Button';
import * as Styles from './BodyDispVirt.styles';

import { Text } from '../../containers/Language';

class BodyDispVirt extends Component {
	clickLink = () => {
		window.location.href =
			"mailto:contact@rtrealm.com?subject=Let's talk!&body=Contact me asap on (phone or email):";
	};

	textBody = text => {
		return <Text tid={text} />;
	};

	render() {
		return (
			<Styles.MainBDV>
				<h1>{this.props.title}</h1>
				{this.props.children}

				<div className='columns is-multiline is-hidden-mobile'>
					<Styles.MainBDVButtonWrapper className='column'>
						<Button
							text={this.textBody('emergencyButton')}
							click={this.clickLink}
						/>
					</Styles.MainBDVButtonWrapper>

					<Styles.MainBDVStores className='column'>
						{/* <a href='/'>
							<img
								src='https://'
								alt='App store icon'
								width='25'
							/>
						</a>
						<a href='/'>
							<img
								src='https://'
								alt='Google play store icon'
								width='26'
							/>
						</a> */}
					</Styles.MainBDVStores>
				</div>
			</Styles.MainBDV>
		);
	}
}
export default BodyDispVirt;
