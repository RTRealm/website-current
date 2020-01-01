import React, { Component } from 'react';
// $FlowFixMe;
import ReactGA from 'react-ga';
// $FlowFixMe;
import ReactPixel from 'react-facebook-pixel';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Page from '../../../components/Page';
// import FloatingCTA from '../../../components/FloatingCTA/FloatingCTA';
// import { LocalisedLink } from '../../../components/LocalisedLink/LocalisedLink';

import * as Styles from '../Terms.styles';

class Cookies extends Component {
	modalCTA = React.createRef();

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
							<h1>Cookie Policy for RT.Realm</h1>
						</div>

						<div className='terms__content'>
							<p>
								This is the Cookie Policy for RT.Realm.
								{/* <LocalisedLink to='/'>https://www.curve.app</LocalisedLink> */}
							</p>

							<Styles.TermsSectionTitles>What Are Cookies</Styles.TermsSectionTitles>

							<p>
								As is common practice with almost all professional websites this site uses cookies,
								which are tiny files that are downloaded to your computer, to improve your
								experience. This page describes what information they gather, how we use it and why
								we sometimes need to store these cookies. We will also share how you can prevent
								these cookies from being stored however this may downgrade or 'break' certain
								elements of the sites functionality.
							</p>

							<p>
								For more general information on cookies see the Wikipedia article on HTTP Cookies.
							</p>

							<Styles.TermsSectionTitles>How We Use Cookies</Styles.TermsSectionTitles>

							<p>
								We use cookies for a variety of reasons detailed below. Unfortunately in most cases
								there are no industry standard options for disabling cookies without completely
								disabling the functionality and features they add to this site. It is recommended
								that you leave on all cookies if you are not sure whether you need them or not in
								case they are used to provide a service that you use.
							</p>

							<Styles.TermsSectionTitles>Disabling Cookies</Styles.TermsSectionTitles>

							<p>
								You can prevent the setting of cookies by adjusting the settings on your browser
								(see your browser Help for how to do this). Be aware that disabling cookies will
								affect the functionality of this and many other websites that you visit. Disabling
								cookies will usually result in also disabling certain functionality and features of
								the this site. Therefore it is recommended that you do not disable cookies.
							</p>

							<p>
								You can learn how to manage cookies on your web browser by following the{' '}
								<a
									href='https://privacypolicies.com/blog/browser-cookies-guide/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Browser Cookies Guide
								</a>
								.
							</p>

							<Styles.TermsSectionTitles>The Cookies We Set</Styles.TermsSectionTitles>

							<ul>
								<li>
									<p className='subheading'>
										<b>Site preferences cookies</b>
									</p>
									<p>
										In order to provide you with a great experience on this site we provide the
										functionality to set your preferences for how this site runs when you use it. In
										order to remember your preferences we need to set cookies so that this
										information can be called whenever you interact with a page is affected by your
										preferences.
									</p>
								</li>
							</ul>

							<p className='subheading'>
								<b>Third Party Cookies</b>
							</p>

							<p>
								In some special cases we also use cookies provided by trusted third parties. The
								following section details which third party cookies you might encounter through this
								site.
							</p>

							<ul>
								<li>
									<p>
										This site uses Google Analytics which is one of the most widespread and trusted
										analytics solution on the web for helping us to understand how you use the site
										and ways that we can improve your experience. These cookies may track things
										such as how long you spend on the site and the pages that you visit so we can
										continue to produce engaging content.
									</p>
									<p>
										For more information on Google Analytics cookies, see the official Google
										Analytics page.
									</p>
								</li>

								<li>
									<p>
										Third party analytics are used to track and measure usage of this site so that
										we can continue to produce engaging content. These cookies may track things such
										as how long you spend on the site or pages you visit which helps us to
										understand how we can improve the site for you.
									</p>
								</li>

								<li>
									<p>
										From time to time we test new features and make subtle changes to the way that
										the site is delivered. When we are still testing new features these cookies may
										be used to ensure that you receive a consistent experience whilst on the site
										whilst ensuring we understand which optimisations our users appreciate the most.
									</p>
								</li>
							</ul>

							<Styles.TermsSectionTitles>More Information</Styles.TermsSectionTitles>

							<p>
								Hopefully that has clarified things for you and as was previously mentioned if there
								is something that you aren't sure whether you need or not it's usually safer to
								leave cookies enabled in case it does interact with one of the features you use on
								our site.
							</p>

							<p>
								However if you are still looking for more information then you can contact us
								through one of our preferred contact methods:
							</p>

							<ul>
								<li>
									Email: <a href='mailto:contact@rtrealm.com'>contact@rtrealm.com</a>
								</li>
							</ul>
						</div>
					</Styles.Terms>

					<div className='fixed-header__trigger-end' />
					{/* <FloatingCTA ref={this.modalCTA} /> */}
					{/* <Footer CTAHandler={this.openCTAModal.bind(this)} 
          page='Cookies' /> */}
					<Footer page='Cookies' />
				</div>
			</Page>
		);
	}
}

export default Cookies;
