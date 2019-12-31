import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import * as InfoStyles from '../../../components/InfoGroup/InfoGroup.styles';
import Image from '../../../components/Image/Image';
import * as Styles from './Control.styles';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

export default class Control extends PureComponent {
	state = {
		activateAnimation: false
	};

	componentDidMount() {
		// $FlowFixMe;
		const gsap = require('gsap');
		// $FlowFixMe;
		// const scrollMagic = require("ScrollMagic");
		// $FlowFixMe;
		// require("animation.gsap");

		// $FlowFixMe;
		let width = document.querySelector('body').clientWidth;

		if (width >= 1224) {
			this.setState({ activateAnimation: true });

			let controller = new scrollMagic.Controller();

			let scene = new scrollMagic.Scene({
				triggerElement: '.control'
			})
				.setTween(
					gsap.TweenLite.to('.control__copy', 0.75, {
						autoAlpha: 1,
						display: 'block',
						marginTop: 0,
						ease: gsap.Power1.easeOut
					})
				)
				.reverse(false)
				.addTo(controller);

			scene.triggerHook(0.75);
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
		const copy = () => {
			return (
				<div>
					<p>
						Managing your money just got a lot easier. With Curve, you get real-time alerts that
						tell you how much you’ve spent (and in which currency).
					</p>
					<p>
						We also show you how you’re spending to help you budget. And if you use the wrong card
						to pay, you can Go Back in Time and change it. With Curve you’re in complete control.
						Brilliant.
					</p>
				</div>
			);
		};

		return (
			<Styles.Control
				className={'control ' + (this.state.activateAnimation ? 'control--animate' : '')}
			>
				{/* <div className='is-hidden-mobile'>
					<LazyLoad once={true} height={604} offset={500}>
						<Styles.ControlSplash />
					</LazyLoad>
				</div>
				<div className='is-hidden-tablet'>
					<LazyLoad once={true} height={448} offset={400}>
						<Styles.ControlSplash />
					</LazyLoad>
				</div> */}
				<Styles.ControlContent className='is-hidden-tablet'>
					<Styles.ControlImage>
						<LazyLoad once={true} height={531} offset={400}>
							<Image
								set={{
									mob: true
								}}
								source={{
									mob:
										'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539860039/website-v2/Homepage/Light/your-the-boss-phone-m_2x'
								}}
								size={{ max: 'max-width:768px' }}
								alt='iPhone with curve app opened displaying a transaction'
								defaultFormat='png'
							/>
						</LazyLoad>
					</Styles.ControlImage>
					<Styles.ControlCopy className='control__copy'>
						<InfoStyles.InfoGroupSubTitle>Outsorcing</InfoStyles.InfoGroupSubTitle>
						<InfoStyles.InfoGroupTitle>Focus on your business</InfoStyles.InfoGroupTitle>
						<InfoStyles.InfoGroupText>{copy()}</InfoStyles.InfoGroupText>
					</Styles.ControlCopy>
				</Styles.ControlContent>
				<Styles.ControlContent className='columns is-hidden-mobile'>
					<div className='column is-6'>
						<Styles.ControlCopy className='control__copy'>
							<InfoGroup title={'Focus on your business'} subtitle={'Outsourcing'}>
								{copy()}
							</InfoGroup>
						</Styles.ControlCopy>
					</div>
					<Styles.ControlImage className='column is-5 is-offset-1'>
						<LazyLoad once={true} height={720} offset={500}>
							<Image
								set={{
									desk: true
								}}
								source={{
									desk:
										'https://res.cloudinary.com/ohcash/image/upload/v1576935840/landingpage/Outsourcing.png'
								}}
								size={{ max: 'min-width:769px' }}
								alt='Displaying a transaction'
								defaultFormat='png'
							/>
						</LazyLoad>
					</Styles.ControlImage>
				</Styles.ControlContent>
				{/* <Styles.ControlSplash2 className='is-hidden-mobile' /> */}
			</Styles.Control>
		);
	}
}
