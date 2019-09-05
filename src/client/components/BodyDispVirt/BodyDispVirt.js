import React, { Component } from 'react';
import Button from '../Button/Button';
import * as Styles from './BodyDispVirt.styles';

class BodyDispVirt extends Component {
	clickLink() {
		window.location.href = `mailto:contact@rtrealm.com`;
	}

	render() {
		return (
			<Styles.MainBDV>
				<h1>{this.props.title}</h1>
				{this.props.children}

				<div className='columns is-multiline is-hidden-mobile'>
					<Styles.MainBDVButtonWrapper className='column'>
						<Button text={'Yes! I need help!'} click={this.clickLink} />
					</Styles.MainBDVButtonWrapper>

					<Styles.MainBDVStores className='column'>
						{/* <a href='/'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536850250/website-v2/Icons/apple-black.svg'
								alt='App store icon'
								width='25'
							/>
						</a>
						<a href='/'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536850249/website-v2/Icons/andriod-black.svg'
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
