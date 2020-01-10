import React, { Component } from 'react';
// $FlowFixMe;
import ReactGA from 'react-ga';
// $FlowFixMe;
import ReactPixel from 'react-facebook-pixel';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Page from '../../../components/Page';
import { Text } from '../../../containers/Language';
// import FloatingCTA from '../../../components/FloatingCTA/FloatingCTA';
// import { LocalisedLink } from '../../../components/LocalisedLink/LocalisedLink';

import * as Styles from '../Terms.styles';

class Cookies extends Component {
	modalCTA = React.createRef();

	textBody = text => {
		return <Text tid={text} />;
	};
	// componentDidMount() {
	// 	ReactGA.pageview(window.location.pathname);
	// 	ReactPixel.pageView();
	// }

	// openCTAModal() {
	// 	this.modalCTA.current.openClickHandler();
	// }

	render() {
		return (
			<Page id='cookie-policy'>
				<div className='app'>
					<Header
						textColor={'white'}
						logo={
							'https://landingpagereactreact-local.s3.eu-central-1.amazonaws.com/logo_black_line_landing_svg.svg'
						}
						link={'/'}
						burgerMenuColor={'black'}
						page='Cookies'
						splash={false}
					/>
					<Styles.Terms>
						<div className='terms__heading'>
							<h1>{this.textBody('cookieTitle')}</h1>
						</div>

						<div className='terms__content'>
							<p>{this.textBody('cookieSubTitle')}</p>

							<Styles.TermsSectionTitles>{this.textBody('cookieHead1')}</Styles.TermsSectionTitles>

							<p>{this.textBody('cookieBody1a')}</p>

							<p>
								{this.textBody('cookieBody1b')}{' '}
								<a
									href='https://en.wikipedia.org/wiki/HTTP_cookie'
									target='_blank'
									rel='noopener noreferrer'
								>
									{this.textBody('cookieBody1c')}
								</a>
								.
							</p>

							<Styles.TermsSectionTitles>{this.textBody('cookieHead2')}</Styles.TermsSectionTitles>

							<p>{this.textBody('cookieBody2')}</p>

							<Styles.TermsSectionTitles>{this.textBody('cookieHead3')}</Styles.TermsSectionTitles>

							<p>{this.textBody('cookieBody3a')}</p>

							<p>
								{this.textBody('cookieBody3b')}{' '}
								<a
									href='https://privacypolicies.com/blog/browser-cookies-guide/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Browser Cookies Guide
								</a>
								.
							</p>

							<Styles.TermsSectionTitles>{this.textBody('cookieHead4')}</Styles.TermsSectionTitles>

							<ul>
								<li>
									<p className='subheading'>
										<b>{this.textBody('cookieSubHead41')}</b>
									</p>
									<p>{this.textBody('cookieBody4a')}</p>
								</li>
							</ul>

							<p className='subheading'>
								<b>{this.textBody('cookieSubHead42')}</b>
							</p>

							<p>{this.textBody('cookieBody4b')}</p>

							<ul>
								<li>
									<p>
										{this.textBody('cookieBody4c')}{' '}
										<a
											href='https://analytics.google.com/analytics/web/provision/#/provision'
											target='_blank'
											rel='noopener noreferrer'
										>
											Google Analytics
										</a>
										.
									</p>
								</li>

								<li>
									<p>{this.textBody('cookieBody4d')}</p>
								</li>

								<li>
									<p>{this.textBody('cookieBody4e')}</p>
								</li>
							</ul>

							<Styles.TermsSectionTitles>{this.textBody('cookieHead5')}</Styles.TermsSectionTitles>

							<p>{this.textBody('cookieBody5a')}</p>

							<p>{this.textBody('cookieBody5b')}</p>

							<ul>
								<li>
									Email: <a href='mailto:contact@rtrealm.com'>contact@rtrealm.com</a>
								</li>
							</ul>
						</div>
					</Styles.Terms>

					<div className='fixed-header__trigger-end' />
					<Footer page='Cookies' />
				</div>
			</Page>
		);
	}
}

export default Cookies;
