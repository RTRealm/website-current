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
							<InfoGroup title={'Banking and more'} subtitle={'Digital Finance'}>
								<p>
									We have a decades long experience in banking and financial markets. This is why we
									can be your preferred partner when it comes to digitilizing your business, whether
									you're a bank, brokerage house, insurance company or a fintech startup.
								</p>
								<p>
									Here we deliver a unique combination of technology and business expertise. Simply,
									we understand what you're doing!
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
