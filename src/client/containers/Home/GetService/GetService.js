import React, { Component } from 'react';
import * as Styles from './GetService.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
// import UnlimitedCards from '../../../components/UnlimitedCards/UnlimitedCards';
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
				{/* <Styles.GetCurveSplash /> */}
				<Styles.GetCurveContent className='getservice-trigger'>
					<InfoGroup title={'Our Top Skills'} subtitle={'Get Service'}>
						<p className='is-hidden-tablet'>
							When you sync all your cards with, your payment information is encrypted so your real
							card numbers are never shared with the retailer.
						</p>
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
										<p>Software engineering. Full stack applications of any size and complexity.</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_ff7f50.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>Consulting. Combination of tech know-how with business logic.</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578068866/landingpage/card-blue.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>Fintech.</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>

							<Styles.GetCurveBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578072144/landingpage/code.svg'
											alt='infinite loop'
										/>
									</Styles.GetCurveBenefitHeading>
									<Styles.GetCurveBenefitContent className='column'>
										<p>Outsourcing.</p>
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
										<p>System design, implementation and maintenance.</p>
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
										<p>Audit.</p>
									</Styles.GetCurveBenefitContent>
								</div>
							</Styles.GetCurveBenefit>
						</Styles.GetCurveBenefits>
						{/* <UnlimitedCards animate={true} cls={'get-curve__benefits'} /> */}
					</div>
				</Styles.GetCurveContent>
			</Styles.GetCurve>
		);
	}
}

export default getCurve;
