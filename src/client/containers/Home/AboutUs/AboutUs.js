import React, { PureComponent } from 'react';

import LazyLoad from 'react-lazyload';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import { Text } from '../../Language';

import * as Styles from './AboutUs.styles';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class AboutUs extends PureComponent {
	controller = null;
	scene1 = null;
	scene2 = null;

	state = {
		activateAnimation: false
	};

	textBody = text => {
		return <Text tid={text} />;
	};

	componentDidMount() {
		const gsap = require('gsap');
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
					gsap.TweenLite.to('.about-us__copy', 3, {
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
				<Styles.AboutUsContent className='about-us__content columns is-hidden-mobile'>
					<div className='column is-7 about-us__copy'>
						<InfoGroup title={this.textBody('titleAU')} subtitle={this.textBody('subtitleAU')}>
							<p>{this.textBody('bodyAU1')}</p>
							<p>{this.textBody('bodyAU2')}</p>
							<p>{this.textBody('bodyAU3')}</p>
						</InfoGroup>
						<LazyLoad once={true} height={71} offset={500}>
							<Styles.AboutUsContentAppStores className='columns'></Styles.AboutUsContentAppStores>
						</LazyLoad>
					</div>
				</Styles.AboutUsContent>
				<div>
					<Styles.AboutUsPhone className='about-us__phone is-hidden-mobile' />
				</div>
			</Styles.AboutUs>
		);
	}
}

export default AboutUs;
