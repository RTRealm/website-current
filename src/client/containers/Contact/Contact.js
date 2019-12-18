import React, { Component } from 'react';
// $FlowFixMe;
import ReactGA from 'react-ga';
// $FlowFixMe;
import ReactPixel from 'react-facebook-pixel';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page';
import FixedHeader from '../../components/FixedHeader/FixedHeader';

// STyles
import * as Styles from './Contact.styles';

class Contact extends Component {
	componentDidMount() {
		ReactGA.pageview(window.location.pathname);
		ReactPixel.pageView();
	}

	openGoogleMaps = () => {
		let url = 'https://goo.gl/maps/M9tX5kEK9gR2';
		let win = window.open(url, '_blank');
		win.focus();
	};

	render() {
		const mapStyles = {
			position: 'relative',
			top: '-50px',
			border: 'none',
			zIndex: 0,
			pointerEvents: 'none'
		};

		return (
			<Page id='contact' title='Contact |' description='RTRealm'>
				<div className='app'>
					<Header
						textColor={'white'}
						link={'/'}
						navLink={'/'}
						navName={'Home'}
						logo={
							'https://res.cloudinary.com/ohcash/image/upload/v1576341382/landingpage/logo_black_line_landing_svg.svg'
						}
						page='Home'
						burgerMenuColor={'black'}
					/>
					<Styles.ContactSection>
						<div className='is-hidden-mobile'></div>
						<FixedHeader />
						<Styles.HeadingGroup>
							<Styles.HeadingH2>Get in touch with us</Styles.HeadingH2>
							<Styles.HeadingSubtitle>
								We're ready to lead you into the future of connected finance.
							</Styles.HeadingSubtitle>
						</Styles.HeadingGroup>
						<div className='fixed-header__trigger-start' />
						<Styles.ContactSupport className='columns'>
							{/* <Styles.ContactSupportItem className='column is-4'>
								<p>
									If you have any questions check our{' '}
									<a
										href='https://support.imaginecurve.com/hc/en-gb'
										target='_blank'
										rel='noopener noreferrer'
									>
										FAQ
									</a>
								</p>
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem> */}

							<Styles.ContactSupportItem className='column is-4 is-offset-2'>
								<p>
									Join our{' '}
									<a href='https://community.curve.app/' target='_blank' rel='noopener noreferrer'>
										Curve Community
									</a>{' '}
									to find more about Curve
								</p>
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>
							<Styles.ContactSupportItem className='column is-4'>
								<p>
									Contact our Support Team:{' '}
									<span>
										<a href='mailto:contact@rtrealm.com'>contact@rtrealm.com</a>
									</span>
								</p>
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>
						</Styles.ContactSupport>

						<Styles.ContactSecurity>
							<p>
								If you are a security researcher and believe you have found a security
								vulnerability, please send an e-mail to us{' '}
								<a href='mailto:contact@rtrealm.com'>contact@rtrealm.com</a>.
							</p>
						</Styles.ContactSecurity>

						<Styles.ContactSocial>
							<Styles.ContactH3>Follow us on social media:</Styles.ContactH3>
							<ul className='columns is-mobile'>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://twitter.com/imaginecurve?lang=en-gb'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536673731/website-v2/Icons/twitter-logo-black.svg'
											alt='twitter logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://www.facebook.com/imaginecurve/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536673731/website-v2/Icons/facebook-logo-black.svg'
											alt='Facebook logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://www.instagram.com/imaginecurve/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536673731/website-v2/Icons/instagram-logo-black.svg'
											alt='Instagram logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://www.linkedin.com/company/curve-ltd-'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541170122/website-v2/Icons/linkedin-logo-black.svg'
											alt='LinkedIn logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://dribbble.com/imaginecurve'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1550489300/website-v2/Icons/dribbble-black.svg'
											alt='Dribbble logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
							</ul>
							<Styles.InfoHr />
						</Styles.ContactSocial>
						<Styles.ContactAddress>
							<Styles.ContactH3>Company Address:</Styles.ContactH3>
							<Styles.ContactAddressList className='columns is-mobile'>
								<Styles.ContactAddressItem className='column'>
									<p>
										<em>RT.Realm</em>
									</p>
									<p>Company 09523903</p>
								</Styles.ContactAddressItem>
								<Styles.ContactAddressItem className='column'>
									<p>
										<em>LABS House</em>
									</p>
									<p>15-19 Bloomsbury Way</p>
									<p>London</p>
									<p>WC1A 2TH</p>
								</Styles.ContactAddressItem>
							</Styles.ContactAddressList>
						</Styles.ContactAddress>

						<Styles.MapWrapper onClick={this.openGoogleMaps}>
							<Styles.Map>
								<iframe
									width='100%'
									height='650'
									frameBorder='0'
									src='https://www.google.com/maps/d/embed?mid=1FPN9hdXRl9TqkajTKctqVOR8CepKj68H'
									allowFullScreen
									title='office location'
									scrolling='no'
									style={mapStyles}
								/>
							</Styles.Map>
						</Styles.MapWrapper>
					</Styles.ContactSection>
				</div>
				{/* <Footer CTAHandler={this.openCTAModal.bind(this)} page={'Contact'} /> */}
				<Footer page={'Contact'} />
				<div className='fixed-header__trigger-end' />
			</Page>
		);
	}
}

export default Contact;
