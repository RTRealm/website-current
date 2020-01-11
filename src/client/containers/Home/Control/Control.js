import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import * as InfoStyles from '../../../components/InfoGroup/InfoGroup.styles';
import Image from '../../../components/Image/Image';
import { Text } from '../../Language';
import * as Styles from './Control.styles';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

export default class Control extends PureComponent {
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
					<p>{this.textBody('bodyCO1')}</p>
					<p>{this.textBody('bodyCO2')}</p>
					<p>{this.textBody('bodyCO3')}</p>
				</div>
			);
		};

		return (
			<Styles.Control
				className={'control ' + (this.state.activateAnimation ? 'control--animate' : '')}
			>
				<Styles.ControlContent className='is-hidden-tablet'>
					<Styles.ControlImage>
						<LazyLoad once={true} height={531} offset={400}>
							<Image
								set={{
									mob: true
								}}
								source={{
									mob:
										'https://res.cloudinary.com/ohcash/image/upload/v1578678818/landingpage/modusoperandi_mob.png'
								}}
								size={{ max: 'max-width:768px' }}
								alt='iPhone with curve app opened displaying a transaction'
								defaultFormat='png'
							/>
						</LazyLoad>
					</Styles.ControlImage>
					<Styles.ControlCopy className='control__copy'>
						<InfoStyles.InfoGroupSubTitle>
							{this.textBody('subtitleCO')}
						</InfoStyles.InfoGroupSubTitle>
						<InfoStyles.InfoGroupTitle>{this.textBody('titleCO')}</InfoStyles.InfoGroupTitle>
						<InfoStyles.InfoGroupText>{copy()}</InfoStyles.InfoGroupText>
					</Styles.ControlCopy>
				</Styles.ControlContent>
				<Styles.ControlContent className='columns is-hidden-mobile'>
					<div className='column is-6'>
						<Styles.ControlCopy className='control__copy'>
							<InfoGroup title={this.textBody('titleCO')} subtitle={this.textBody('subtitleCO')}>
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
										'https://res.cloudinary.com/ohcash/image/upload/v1578522455/landingpage/Real2.png'
								}}
								size={{ max: 'min-width:769px' }}
								alt='Displaying a transaction'
								defaultFormat='png'
							/>
						</LazyLoad>
					</Styles.ControlImage>
				</Styles.ControlContent>
			</Styles.Control>
		);
	}
}
