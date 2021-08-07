import React, { Component } from 'react';
import * as Styles from './Africa.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import { Text } from '../../Language';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Africa extends Component {
	controller = null;
	scene = null;

	textBody = text => {
		return <Text tid={text} />;
	};

	componentDidMount() {
		const gsap = require('gsap');

		let width = document.querySelector('body').clientWidth;

		if (width >= 1224) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.africa__content'
			})
				.setTween(
					gsap.TweenLite.to('.africa__features-item', 1, {
						autoAlpha: 1,
						display: 'block',
						top: 0,
						ease: gsap.Power1.easeOut
					})
				)
				.reverse(false)
				.addTo(this.controller);

			this.scene.triggerHook(0.6);
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
			<Styles.Africa>
				<Styles.AfricaContent className='africa__content'>
					<div className='columns'>
						<div className='column is-5'>
							<img
								className='is-hidden-tablet'
								src='https://res.cloudinary.com/ohcash/image/upload/v1581269927/landingpage/finance-s-mob_n.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1581269927/landingpage/finance-l-mob_n.png 2x'
								alt='Phone displaying trading page'
							/>
							<img
								className='is-hidden-mobile'
								src='https://res.cloudinary.com/ohcash/image/upload/v1581269927/landingpage/finance-s_n.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1581269927/landingpage/finance-l_n.png 2x'
								alt='Phone displaying trading page'
							/>
						</div>
						<Styles.AfricaCopy className='column is-offset-1'>
							<InfoGroup  subtitle={this.textBody('subtitleAF')}>
								<p>{this.textBody('bodyAF1')}</p>
							</InfoGroup>
							<Styles.AfricaFeatures className='columns is-narrow is-mobile'>
								<Styles.AfricaFeaturesItem className='column africa__features-item'>
									<a href='http://www.amh-egypt.com/index.html' target='blank'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1628368409/landingpage/credentials/amh.svg'
										alt='AMH'
									/>
									</a>
								</Styles.AfricaFeaturesItem>
							</Styles.AfricaFeatures>
						</Styles.AfricaCopy>
					</div>
				</Styles.AfricaContent>
			</Styles.Africa>
		);
	}
}

export default Africa;
