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
						<div className='column is-5' id='logo_amh'>
							<img
								className='is-hidden-tablet'
								src='https://res.cloudinary.com/ohcash/image/upload/v1628429820/landingpage/amh_img_s_mobile.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1628429369/landingpage/amh_imgx2_mobile.png 2x'
								alt='Logo AMH'
							/>
							<img
								id='logo_amh'
								className='is-hidden-mobile'
								src='https://res.cloudinary.com/ohcash/image/upload/v1628429821/landingpage/amh_s_img.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1628422566/landingpage/amh_imgx2.png 2x'
								alt='Logo AMH'
							/>
						</div>
						<Styles.AfricaCopy className='column is-offset-1'>
							<InfoGroup >
								<p><a href='http://www.amh-egypt.com' target='blank'>{this.textBody('linkAFAMH')}</a>{(' ')}{this.textBody('bodyAF1')}</p>
							</InfoGroup>
							<Styles.AfricaFeatures className='columns is-narrow is-mobile'>
								<Styles.AfricaFeaturesItem className='column africa__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1628422473/landingpage/egipt_flag_sml.svg'
										alt='Egypt flag'
									/>					
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
