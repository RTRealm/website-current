import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import * as Styles from './CookieBanner.styles';

class CookieBanner extends Component {
	saveCookieAgreement = () => {
		localStorage.setItem('cookieAcknowledgement', 'true');

		// $FlowFixMe;
		const gsap = require('gsap');

		let tl = new gsap.TimelineLite();

		tl.to('.cookie-banner', 0.3, {
			height: '0px',
			boxShadow: '0px',
			ease: gsap.Power2.easeOut
		}).to('.cookie-banner', 0.1, { autoAlpha: 0 });
	};

	render() {
		return (
			<div>
				<Styles.CookieBannerWrapper className='cookie-banner'>
					<Styles.CookieBanner className='columns is-mobile'>
						<p className='column is-10'>
							Everybody loves cookies{' '}
							<span role='img' aria-label='cookie'>
								🍪
							</span>
							. By continuing to use our website, you agree to our{' '}
							<Link to='/cookie-policy'>cookies</Link> policy.
						</p>
						<button className='column is-2' onClick={this.saveCookieAgreement}>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/f_auto,q_auto/v1547669331/website-v2/Icons/cross-black'
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
