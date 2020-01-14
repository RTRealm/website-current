import React, { Component } from 'react';

// Custom Components
import Button from '../Button/Button';
import { Text } from '../../containers/Language';

// Styles
import * as Styles from './MobileFloat.styles';
import * as scrollMagic from 'scrollmagic';

class MobileFloat extends Component {
	state = {
		fixedProducts: false
	};

	static defaultProps = {
		metal: false
	};

	cards = null;
	controller = null;
	scene1 = null;
	scene2 = null;
	scene3 = null;

	clickLink = () => {
		window.location.href = 'mailto:contact@rtrealm.com';
	};

	textBody = text => {
		return <Text tid={text} />;
	};

	componentDidMount() {
		const gsap = require('gsap');

		this.controller = new scrollMagic.Controller();

		this.scene1 = new scrollMagic.Scene({
			triggerElement: '.mobile-cta__start',
			duration: 0
		})
			.addTo(this.controller)
			.on('enter leave', e => {
				if (e.scrollDirection === 'FORWARD') {
					this.setState({ fixedProducts: true });
					gsap.TweenLite.fromTo(
						'.mobile-cta-footer',
						0.3,
						{
							autoAlpha: 0,
							ease: gsap.Power1.easeOut
						},
						{
							autoAlpha: 1,
							ease: gsap.Power1.easeOut
						}
					);
				} else {
					gsap.TweenLite.fromTo(
						'.mobile-cta-footer',
						0.3,
						{
							autoAlpha: 1,
							ease: gsap.Power1.easeOut
						},
						{
							autoAlpha: 0,
							ease: gsap.Power1.easeOut
						}
					).eventCallback('onComplete', () => {
						this.setState({ fixedProducts: false });
					});
				}
			})
			.triggerHook(0);

		this.scene2 = new scrollMagic.Scene({
			triggerElement: '.mobile-cta__end',
			duration: 0
		})
			.addTo(this.controller)
			.on('enter leave', e => {
				if (e.scrollDirection === 'FORWARD') {
					this.setState({ fixedProducts: false });
				} else {
					this.setState({ fixedProducts: true });
				}
			})
			.triggerHook(1);

		if (this.props.metal) {
			this.scene3 = new scrollMagic.Scene({
				triggerElement: '.mobile-cta__transition',
				duration: 0
			})
				.addTo(this.controller)
				.on('enter leave', e => {
					if (e.scrollDirection === 'FORWARD') {
						gsap.TweenLite.to('.mobile-cta-footer span', 0.3, {
							background:
								'linear-gradient(0deg,#f6f6f6 44%,rgba(246, 246, 246, 0.8) 67%,rgba(246, 246, 246, 0) 100%)'
						});
						gsap.TweenLite.to('.mobile-cta-footer p', 0.3, {
							color: '#000'
						});
					} else {
						gsap.TweenLite.to('.mobile-cta-footer span', 0.3, {
							background:
								'linear-gradient(0deg,#000 44%,rgba(0, 0, 0, 0.8) 67%,rgba(0, 0, 0, 0) 100%)'
						});
						gsap.TweenLite.to('.mobile-cta-footer p', 0.3, {
							color: '#fff'
						});
					}
				})
				.triggerHook(1);
		}
	}

	componentWillUnmount() {
		if (this.controller) {
			this.controller.destroy();
			this.scene1.destroy();
			this.scene2.destroy();
			if (this.props.metal) {
				this.scene3.destroy();
			}
		}
	}

	render() {
		return (
			<Styles.MobileCTAFooterWrapper className='is-hidden-tablet mobile-cta__wrapper'>
				<Styles.MobileCTAFooterContent>
					<Styles.MobileCTAFooter
						className={
							'mobile-cta-footer ' +
							(this.props.metal ? 'mobile-cta-footer__dark ' : '') +
							(this.state.fixedProducts ? 'mobile-cta-footer__fixed' : '')
						}
					>
						<span />
						<div className='mobile-cta-footer__wrapper'>
							<Button
								text={this.textBody('buttonFH')}
								click={this.clickLink}
								class={'mobileFooter__cta'}
								background={'#4ecfff'}
								id={'mobileFooter__cta'}
								tracking={{
									category: 'Download',
									action: 'Open main CTA modal',
									label: 'Download for free - Mobile fixed cta'
								}}
							/>
							<p>{/* {this.props
									? 'Select .'
									: 'Select  after downloading the App.'} */}</p>
						</div>
					</Styles.MobileCTAFooter>
				</Styles.MobileCTAFooterContent>
				<span className='mobile-cta__end' />
				<Styles.MobileCTAAdditional>
					<p></p>
				</Styles.MobileCTAAdditional>
			</Styles.MobileCTAFooterWrapper>
		);
	}
}

export default MobileFloat;
