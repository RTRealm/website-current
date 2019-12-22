import React, { PureComponent } from 'react';

import LazyLoad from 'react-lazyload';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';

import * as Styles from './AboutUs.styles';

import { TweenMax, TimelineMax } from 'gsap';
// import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import * as scrollMagic from 'scrollmagic';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class AboutUs extends PureComponent {
	controller = null;
	scene1 = null;
	scene2 = null;

	state = {
		activateAnimation: false
	};

	componentDidMount() {
		const gsap = require('gsap');
		// const scrollMagic = require('scrollmagic');
		// require('animation.gsap');
		let width = document.querySelector('body').clientWidth;
		if (width >= 1224) {
			this.setState({ activateAnimation: true });
			this.controller = new scrollMagic.Controller();
			let tween_phone = new gsap.TimelineLite().add([
				gsap.TweenLite.fromTo(
					'.about-us__phone',
					1,
					{ top: -200 },
					{ top: 400, ease: gsap.Linear.easeNone }
				)
			]);

			this.scene1 = new scrollMagic.Scene({
				triggerElement: '.about-us',
				duration: '250%'
			})
				.setTween(tween_phone)
				.addTo(this.controller);

			this.scene2 = new scrollMagic.Scene({
				triggerElement: '.about-us'
			})
				.setTween(
					gsap.TweenLite.to('.about-us__copy', 1, {
						autoAlpha: 1,
						display: 'block',
						marginTop: 0,
						ease: gsap.Power1.easeOut
					})
				)
				.reverse(false)
				.addTo(this.controller);
			this.scene2.triggerHook(0.75);
		}
	}

	componentWillUnmount() {
		if (this.controller) {
			this.controller.destroy();
			this.scene1.destroy();
			this.scene2.destroy();
		}
	}

	render() {
		return (
			<Styles.AboutUs
				className={'about-us ' + (this.state.activateAnimation ? 'about-us--animate' : '')}
			>
				<Styles.AboutUsSplash2 />
				<Styles.AboutUsContent className='about-us__content columns is-hidden-mobile'>
					<div className='column is-7 about-us__copy'>
						<InfoGroup title={'Web and mobile'} subtitle={'Development'}>
							<p>
								It seems to us you don’t need another bank. You just need a better way to control
								your money. So, we’ve created one very simple card that puts all your finances in
								one very smart place.
							</p>
							<p>
								With all your finances at your fingertips, you can get on with the business of
								enjoying life. Get Curve now.
							</p>
						</InfoGroup>
						<LazyLoad once={true} height={71} offset={500}>
							<Styles.AboutUsContentAppStores className='columns'>
								{/* <li className='column is-narrow'>
									<a
										href='https://itunes.apple.com/gb/app/id1049397112?mt=8'
										target='_blank'
										rel='noopener noreferrer'
										data-eventcategory='AppStore'
										data-eventaction='Go to App store'
										data-eventlabel='App Store - Home about us'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1537895079/website-v2/Icons/app-store-btn.svg'
											alt='App store'
										/>
									</a>
								</li>
								<li className='column is-narrow'>
									<a
										href='https://play.google.com/store/apps/details?id=com.imaginecurve.curve.prd&hl=en_GB&af_prt=Rebelhack&pid=imaginecurve.com'
										target='_blank'
										rel='noopener noreferrer'
										data-eventcategory='PlayStore'
										data-eventaction='Go to Play store'
										data-eventlabel='Play Store - Home about us'
									>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1537895079/website-v2/Icons/google-play-btn.svg'
											alt='Play store'
										/>
									</a>
								</li> */}
							</Styles.AboutUsContentAppStores>
						</LazyLoad>
					</div>
				</Styles.AboutUsContent>
				<div>
					<Styles.AboutUsPhone className='about-us__phone is-hidden-mobile' />
					<Styles.AboutUsSplash className='about-us__splash' />
				</div>
			</Styles.AboutUs>
		);
	}
}

export default AboutUs;
