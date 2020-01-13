import React, { Component } from 'react';
// $FlowFixMe;
// import ReactGA from 'react-ga';
// $FlowFixMe;
import ReactPixel from 'react-facebook-pixel';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Page from '../../components/Page';
// import FixedHeader from '../../components/FixedHeader/FixedHeader';
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
							'https://res.cloudinary.com/ohcash/image/upload/v1576341382/landingpage/logo_black_line_landing_svg.svg'
						}
						page='Home'
						burgerMenuColor={'black'}
					/>
					<Styles.ContactSection>
						<div className='is-hidden-mobile'></div>
						{/* <FixedHeader /> */}
						<Styles.HeadingGroup>
							<Styles.HeadingH2>{this.textBody('titleCP')}</Styles.HeadingH2>
							<Styles.HeadingSubtitle>{this.textBody('subtitleCP')}</Styles.HeadingSubtitle>
						</Styles.HeadingGroup>

						<Styles.ContactSecurity>
							<p>
								{this.textBody('contactEmail')}{' '}
								<a href='mailto:contact@rtrealm.com'>contact@rtrealm.com</a>
							</p>
						</Styles.ContactSecurity>

						<div className='fixed-header__trigger-start' />
						<Styles.ContactSupport className='columns'>
							<Styles.InfoHr className='is-hidden-tablet' />
							<Styles.ContactSupportItem className='column is-4'>
								<p>
									<i id='skillicon' class='fas fa-map-marker-alt'></i>{' '}
									{this.textBody('contactWarsaw')}
								</p>
								{/* <a
										href='https://'
										target='_blank'
										rel='no'
									>
										find
									</a> */}
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>

							<Styles.ContactSupportItem className='column is-4'>
								<p>
									<i id='skillicon' class='fas fa-map-marker-alt'></i>{' '}
									{this.textBody('contactLondon')}
								</p>
								{/* <p>
									Join our{' '}
									<a href='https:///' target='_blank' rel='no'>
										Commu
									</a>{' '}
									find
								</p> */}
								<Styles.InfoHr className='is-hidden-tablet' />
							</Styles.ContactSupportItem>
							<Styles.ContactSupportItem className='column is-4'>
								<p>
									<i id='skillicon' class='fas fa-map-marker-alt'></i>{' '}
									{this.textBody('contactBarcelona')}
								</p>
								{/* <p>
									Contact our Support Team:{' '}
									<span>
										<a href='mailto:contact@rtrealm.com'>contact@rtrealm.com</a>
									</span>
								</p> */}
								{/* <Styles.InfoHr className='is-hidden-tablet' /> */}
							</Styles.ContactSupportItem>
						</Styles.ContactSupport>

						<Styles.ContactSocial>
							<Styles.ContactH3>Follow us on social media:</Styles.ContactH3>
							<ul className='columns is-mobile'>
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
							</ul>
						</Styles.ContactSocial>
						<Styles.InfoHr />
						{/* <Styles.ContactAddress>
							<Styles.ContactH3>Company Address:</Styles.ContactH3>
							<Styles.ContactAddressList className='columns is-mobile'>
								<Styles.ContactAddressItem className='column'>
									<p>
										<em>RT.Realm</em>
									</p>
									<p>Company </p>
								</Styles.ContactAddressItem>
								<Styles.ContactAddressItem className='column'>
									<p>
										<em>biuro</em>
									</p>
									<p>ulica</p>
									<p>Warsaw</p>
									<p>kod</p>
								</Styles.ContactAddressItem>
							</Styles.ContactAddressList>
						</Styles.ContactAddress> */}

						{/* <Styles.MapWrapper>
							<Styles.Map>
								<iframe
									width='100%'
									height='650'
									frameBorder='0'
									src='https://res.cloudinary.com/ohcash/image/upload/v1578574106/landingpage/contactMap.png'
									allowFullScreen
									title='office location'
									scrolling='no'
									style={mapStyles}
								/>
							</Styles.Map>
						</Styles.MapWrapper> */}
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
