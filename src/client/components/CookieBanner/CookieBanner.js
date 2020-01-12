import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../containers/Language';

// Styles
import * as Styles from './CookieBanner.styles';

class CookieBanner extends Component {
	saveCookieAgreement = () => {
		localStorage.setItem('cookieAcknowledgement', 'true');

		const gsap = require('gsap');

		let tl = new gsap.TimelineLite();

		tl.to('.cookie-banner', 0.3, {
			height: '0px',
			boxShadow: '0px',
			ease: gsap.Power2.easeOut
		}).to('.cookie-banner', 0.1, { autoAlpha: 0 });
	};

	textBody = text => {
		return <Text tid={text} />;
	};

	render() {
		return (
			<div>
				<Styles.CookieBannerWrapper className='cookie-banner'>
					<Styles.CookieBanner className='columns is-mobile'>
						<p className='column is-10'>
							{this.textBody('cookieBannerA')}{' '}
							<span id='cookie'>
								{/* 🍪 */}
								<i className='fas fa-spin fa-cookie-bite'></i>.
							</span>{' '}
							{this.textBody('cookieBannerB')}{' '}
							<Link to='/cookie-policy'>{this.textBody('cookieLink')}</Link>.
						</p>
						<button className='column is-2' onClick={this.saveCookieAgreement}>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578828954/landingpage/cross-black.png'
								alt='close'
							/>
						</button>
					</Styles.CookieBanner>
				</Styles.CookieBannerWrapper>
			</div>
		);
	}
}

export default CookieBanner;
