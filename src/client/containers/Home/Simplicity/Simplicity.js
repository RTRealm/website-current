import React, { Component } from 'react';
import * as Styles from './Simplicity.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Simplicity extends Component {
	controller = null;
	scene = null;

	componentDidMount() {
		// $FlowFixMe;
		const gsap = require('gsap');
		// $FlowFixMe;
		// const scrollMagic = require('ScrollMagic');
		// $FlowFixMe;
		// require('animation.gsap');

		// $FlowFixMe;
		let width = document.querySelector('body').clientWidth;

		if (width >= 1224) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.simplicity__content'
			})
				.setTween(
					gsap.TweenLite.to('.simplicity__features-item', 1, {
						autoAlpha: 1,
						display: 'block',
						top: 0,
						ease: gsap.Power1.easeOut
					})
				)
				.reverse(false)
				.addTo(this.controller);

			this.scene.triggerHook(0.25);
		}
	}

	componentWillUnmount() {
		if (this.controller) {
			this.controller.destroy();
			this.scene.destroy();
		}
	}

	render() {
		return (
			<Styles.Simplicity>
				{/* <Styles.SimplicitySplash /> */}
				{/* <Styles.SimplicitySplash2 className='is-hidden-mobile' /> */}
				<Styles.SimplicityContent className='simplicity__content'>
					<div className='columns'>
						<div className='column is-5'>
							<img
								className='is-hidden-tablet'
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1539903924/website-v2/Travel/notifications-phone-m.jpg'
								srcSet='https://res.cloudinary.com/dzatxn6bx/image/upload/v1539903924/website-v2/Travel/notifications-phone-m_2x.jpg 2x'
								alt='Phone displaying a notification'
							/>
							<img
								className='is-hidden-mobile'
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1537890393/website-v2/Travel/notifications-phone.png'
								srcSet='https://res.cloudinary.com/dzatxn6bx/image/upload/v1537890394/website-v2/Travel/notifications-phone_2x.png 2x'
								alt='Phone displaying a notification'
							/>
						</div>
						<Styles.SimplicityCopy className='column is-offset-1'>
							<InfoGroup title={'Travel simply'} subtitle={'Simplicity'}>
								<p>
									We make travel simple. Curve is all your cards in one, so you only carry one
									brilliant card wherever you go. And thanks to our instant notifications, you can
									be on top of your spend abroad. So relax, enjoy the ride and leave the complicated
									stuff to us.
								</p>
							</InfoGroup>

							<Styles.SimplicityFeatures className='columns is-narrow is-mobile'>
								<Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578144500/landingpage/cisco.svg'
										alt='Cisco'
									/>
								</Styles.SimplicityFeaturesItem>
								<Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578144498/landingpage/cfa-logo.svg'
										alt='CFA'
									/>
								</Styles.SimplicityFeaturesItem>
								{/* <Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									<img
										src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536844208/website-v2/Icons/receipt.svg'
										alt='Receipt icon'
									/>
								</Styles.SimplicityFeaturesItem> */}
							</Styles.SimplicityFeatures>
						</Styles.SimplicityCopy>
					</div>
				</Styles.SimplicityContent>
			</Styles.Simplicity>
		);
	}
}

export default Simplicity;
