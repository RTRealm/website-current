import React, { Component } from 'react';

// import ReactGA from 'react-ga';

import ReactPixel from 'react-facebook-pixel';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page';

import { Text } from '../Language';

// Styles
import * as Styles from './Contact.styles';
import FooterDev from '../../components/Footer/FooterDev/FooterDev';

class Contact extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		// ReactGA.pageview(window.location.pathname);
		// ReactPixel.pageView();
	}

	textBody = text => {
		return <Text tid={text} />;
	};

	// openGoogleMaps = () => {
	// 	let url = 'https://goo.gl/maps/';
	// 	let win = window.open(url, '_blank');
	// 	win.focus();
	// };

	render() {
		const mapStyles = {
			position: 'relative',
			top: '0px',
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
						navName={this.textBody('homeHeader')}
						logo={
							'https://res.cloudinary.com/ohcash/image/upload/v1621359881/landingpage/rtrealm_logo_color.svg'
						}
						page='Home'
						burgerMenuColor={'black'}
					/>
					<Styles.ContactSection>
						<div className='is-hidden-mobile'></div>
						<Styles.HeadingGroup>
							<Styles.HeadingH2>{this.textBody('titleCP')}</Styles.HeadingH2>
							<Styles.HeadingSubtitle>{this.textBody('subtitleCP')}</Styles.HeadingSubtitle>
						</Styles.HeadingGroup>

						<Styles.ContactSecurity>
							<p>
								{this.textBody('contactEmail')}{' '}
								<a href="mailto:contact@rtrealm.com?subject=Let's talk!& body=Contact me asap on (phone or email):">
									contact@rtrealm.com
								</a>
							</p>
						</Styles.ContactSecurity>
						<Styles.InfoHr1 />
						<div className='fixed-header__trigger-start' />
						<Styles.ContactSupport className='columns'>
							{/* <Styles.InfoHr className='is-hidden-tablet' /> */}
							<Styles.ContactSupportItem className='column is-3'>
								<a
									href='https://www.google.pl/maps/place/Concept+Tower,+Grzybowska+87,+00-001+Warszawa/@52.2324361,20.975746,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecc9d326f1aa1:0xd1adccbe1eb70d36!8m2!3d52.2324361!4d20.9779347'
									target='_blank'
									rel='no'
								>
									<p>
										<i id='skillicon' className='fas fa-map-marker-alt'></i>{' '}
										{this.textBody('contactWarsaw')}
									</p>
								</a>
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>

							<Styles.ContactSupportItem className='column is-3'>
								<a
									href='https://www.google.com/maps/place/12+Moorgate,+London+EC2R+6DA,+UK/@51.5157879,-0.0912202,17z/data=!3m1!4b1!4m5!3m4!1s0x48761cab491b800b:0x7041f5eadcaeb2b3!8m2!3d51.5157846!4d-0.0890315'
									target='_blank'
									rel='no'
								>
									<p>
										<i id='skillicon' className='fas fa-map-marker-alt'></i>{' '}
										{this.textBody('contactLondon')}
									</p>
								</a>
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>
							<Styles.ContactSupportItem className='column is-3'>
								<a
									href='https://www.google.com/maps/place/Passeig+de+Gr%C3%A0cia,+17,+08007+Barcelona,+Spain/@41.3897722,2.1651594,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a2f260e1a991:0xbf094531b85e2688!8m2!3d41.3897682!4d2.1673481'
									target='_blank'
									rel='no'
								>
									<p>
										<i id='skillicon' className='fas fa-map-marker-alt'></i>{' '}
										{this.textBody('contactBarcelona')}
									</p>
								</a>
							</Styles.ContactSupportItem>
							<Styles.ContactSupportItem className='column is-3'>
								<a
									href='#'
									target='_blank'
									rel='no'
								>
									<p>
										<i id='skillicon' className='fas fa-map-marker-alt'></i>{' '}
										{this.textBody('contactCairo')}
									</p>
								</a>
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>

						</Styles.ContactSupport>
						<Styles.ContactSocial>
							<Styles.ContactH3>{this.textBody('contactFollow')}</Styles.ContactH3>
							<ul className='columns is-mobile'>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://www.facebook.com/rtrealm'
										target='_blank'
									>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1579087764/landingpage/facebook-blue.svg'
											alt='Facebook logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://www.linkedin.com/company/rtrealm/'
										target='_blank'
									>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578847544/landingpage/linkedin_logo_blue.svg'
											alt='LinkedIn logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
								<li className='column is-narrow-tablet'>
									<Styles.ContactSocialLinks
										href='https://www.instagram.com/rt.realm'
										target='_blank'
									>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1579087764/landingpage/instagram-blue.svg'
											alt='Instagram logo'
										/>
									</Styles.ContactSocialLinks>
								</li>
							</ul>
						</Styles.ContactSocial>
						<Styles.InfoHr1 />
					</Styles.ContactSection>
				</div>
				<Footer page={'Contact'} />
				<FooterDev />
				<div className='fixed-header__trigger-end' />
			</Page>
		);
	}
}

export default Contact;
