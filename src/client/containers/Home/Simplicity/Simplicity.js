import React, { Component } from 'react';
import * as Styles from './Simplicity.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import { Text } from '../../Language';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Simplicity extends Component {
	controller = null;
	scene = null;

	textBody = text => {
		return <Text tid={text} />;
	};

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
								src='https://res.cloudinary.com/ohcash/image/upload/v1578310884/landingpage/finance-s-mob.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1578310883/landingpage/finance-l-mob.png 2x'
								alt='Phone displaying a notification'
							/>
							<img
								className='is-hidden-mobile'
								src='https://res.cloudinary.com/ohcash/image/upload/v1578310126/landingpage/finance-s.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1578310129/landingpage/finance-l.png 2x'
								alt='Phone displaying a notification'
							/>
						</div>
						<Styles.SimplicityCopy className='column is-offset-1'>
							<InfoGroup title={this.textBody('titleSI')} subtitle={this.textBody('subtitleSI')}>
								<p>{this.textBody('bodySI1')}</p>
								<p>{this.textBody('bodySI2')}</p>
							</InfoGroup>
							<Styles.SimplicityFeatures className='columns is-narrow is-mobile'>
								<Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578144498/landingpage/cfa-logo.svg'
										alt='CFA'
									/>
								</Styles.SimplicityFeaturesItem>
								<Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									{/* <img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578144498/landingpage/cfa-logo.svg'
										alt='CFA'
									/> */}
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
