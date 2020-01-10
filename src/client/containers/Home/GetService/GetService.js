import React, { Component } from 'react';
import * as Styles from './GetService.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import { Text } from '../../Language';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class getCurve extends Component {
	controller = null;
	scene = null;

	handleListLoad = list => {
		const gsap = require('gsap');
		// const ScrollMagic = require('scrollmagic');
		// require('animation.gsap');
		let width = document.querySelector('body').clientWidth;
		if (width >= 599) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.getservice-trigger'
			})
				// .setTween(() =>
				// 	gsap.TweenMax.staggerTo(
				// 		'.travel-cashback__brands-item',
				// 		0.3,
				// 		{
				// 			autoAlpha: 1,
				// 			display: 'block',
				// 			top: 0,
				// 			ease: gsap.Power1.easeOut
				// 		},
				// 		0.1
				// 	)
				// )

				.setTween(
					gsap.TweenLite.to(list, 2, {
						autoAlpha: 1,
						display: 'flex',
						top: 0,
						ease: gsap.Power1.easeOut
					})
				)
				.reverse(false)
				.addTo(this.controller);
			this.scene.triggerHook(0.6);
		}
	};

	textBody = text => {
		return <Text tid={text} />;
	};

	componentDidMount() {
		this.handleListLoad('.getservice');
	}

	componentWillUnmount() {
		if (this.controller) {
			this.controller.destroy();
			this.scene.destroy();
		}
	}

	render() {
		return (
			<Styles.GetCurve className='title-trigger'>
				<Styles.GetCurveContent className='getservice-trigger'>
					<InfoGroup title={this.textBody('titleGS')} subtitle={this.textBody('subtitleGS')}>
						{/* <p className='is-hidden-tablet'>
							Lorem ipsum
						</p> */}
					</InfoGroup>
					<div className='is-hidden-mobile'>
						<Styles.GetCurveBenefits className='get-curve__benefits columns is-multiline getservice'>
							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_ff7f50.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>{this.textBody('skill1')}</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578573887/landingpage/infinity_blue.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>{this.textBody('skill2')}</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578573887/landingpage/infinity_pink.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>{this.textBody('skill3')}</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>

							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578573888/landingpage/infinity_yellow.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>{this.textBody('skill4')}</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>

							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_green.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>{this.textBody('skill5')}</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>{this.textBody('skill6')}</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
						</Styles.GetCurveBenefits>
					</div>
				</Styles.GetCurveContent>
			</Styles.GetCurve>
		);
	}
}

export default getCurve;
