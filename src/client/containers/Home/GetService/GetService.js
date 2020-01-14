import React, { Component } from 'react';
import * as Styles from './GetService.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import { Text } from '../../Language';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class getService extends Component {
	controller = null;
	scene = null;

	handleListLoad = list => {
		const gsap = require('gsap');
		let width = document.querySelector('body').clientWidth;
		if (width >= 599) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.getservice-trigger'
			})
				// .setTween(() =>
				// 	gsap.TweenMax.staggerTo(
				// 		'.getservice__brands-item',
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
			this.scene.triggerHook(0.65);
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
			<Styles.GetService className='title-trigger'>
				<Styles.GetServiceContent className='getservice-trigger'>
					<InfoGroup title={this.textBody('titleGS')} subtitle={this.textBody('subtitleGS')}>
						{/* <p className='is-hidden-tablet'>
							Lorem ipsum
						</p> */}
					</InfoGroup>
					<div className='is-hidden-mobile'>
						<Styles.GetServiceBenefits className='get-service__benefits columns is-multiline getservice'>
							<Styles.GetServiceBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetServiceBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_ff7f50.svg'
											alt='infinite loop'
										/>
									</Styles.GetServiceBenefitHeading>
									<Styles.GetServiceBenefitContent className='column'>
										<p>
											<span id='stronger'>{this.textBody('skill1main')}</span>{' '}
											{this.textBody('skill1')}
										</p>
									</Styles.GetServiceBenefitContent>
								</div>
							</Styles.GetServiceBenefit>
							<Styles.GetServiceBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetServiceBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578573887/landingpage/infinity_blue.svg'
											alt='infinite loop'
										/>
									</Styles.GetServiceBenefitHeading>
									<Styles.GetServiceBenefitContent className='column'>
										<p>
											<span id='stronger'>{this.textBody('skill2main')}</span>{' '}
											{this.textBody('skill2')}
										</p>
									</Styles.GetServiceBenefitContent>
								</div>
							</Styles.GetServiceBenefit>
							<Styles.GetServiceBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetServiceBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578573887/landingpage/infinity_pink.svg'
											alt='infinite loop'
										/>
									</Styles.GetServiceBenefitHeading>
									<Styles.GetServiceBenefitContent className='column'>
										<p>
											<span id='stronger'>{this.textBody('skill3main')}</span>{' '}
											{this.textBody('skill3')}
										</p>
									</Styles.GetServiceBenefitContent>
								</div>
							</Styles.GetServiceBenefit>

							<Styles.GetServiceBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetServiceBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578573888/landingpage/infinity_yellow.svg'
											alt='infinite loop'
										/>
									</Styles.GetServiceBenefitHeading>
									<Styles.GetServiceBenefitContent className='column'>
										<p>
											<span id='stronger'>{this.textBody('skill4main')}</span>{' '}
											{this.textBody('skill4')}
										</p>
									</Styles.GetServiceBenefitContent>
								</div>
							</Styles.GetServiceBenefit>

							<Styles.GetServiceBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetServiceBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_green.svg'
											alt='infinite loop'
										/>
									</Styles.GetServiceBenefitHeading>
									<Styles.GetServiceBenefitContent className='column'>
										<p>
											<span id='stronger'>{this.textBody('skill5main')}</span>{' '}
											{this.textBody('skill5')}
										</p>
									</Styles.GetServiceBenefitContent>
								</div>
							</Styles.GetServiceBenefit>
							<Styles.GetServiceBenefit className='column is-6'>
								<div className='columns'>
									<Styles.GetServiceBenefitHeading className='column is-4-tablet is-3-desktop'>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity.svg'
											alt='infinite loop'
										/>
									</Styles.GetServiceBenefitHeading>
									<Styles.GetServiceBenefitContent className='column'>
										<p>
											<span id='stronger'>{this.textBody('skill6main')}</span>{' '}
											{this.textBody('skill6')}
										</p>
									</Styles.GetServiceBenefitContent>
								</div>
							</Styles.GetServiceBenefit>
						</Styles.GetServiceBenefits>
					</div>
				</Styles.GetServiceContent>
			</Styles.GetService>
		);
	}
}

export default getService;
