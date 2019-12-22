import React, { Component } from 'react';
import * as Styles from './Cashback.styles';
import InfoGroup from '../../../components/InfoGroup/InfoGroup';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
// // import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Cashback extends Component {
	controller = null;
	scene = null;

	componentDidMount() {
		// $FlowFixMe;
		// ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);
		const gsap = require('gsap');
		// // $FlowFixMe;
		// const ScrollMagic = require('scrollmagic');
		// // $FlowFixMe;
		// require('animation.gsap');

		let width = document.querySelector('body').clientWidth;

		if (width >= 1224) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.travel-cashback__content'
			})
				.setTween(() =>
					gsap.TweenMax.staggerTo(
						'.travel-cashback__brands-item',
						0.3,
						{
							autoAlpha: 1,
							display: 'block',
							top: 0,
							ease: gsap.Power1.easeOut
						},
						0.1
					)
				)
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
			<Styles.TravelCashback>
				<Styles.TravelCashbacksplash3 className=' is-hidden-mobile' />
				<Styles.TravelCashbackContent className='travel-cashback__content'>
					<Styles.TravelCaskbackCopy>
						<InfoGroup title={'With you in mind abroad.'} subtitle={'Instant Cashback'}>
							<p>
								We work behind the scenes to make your travels more rewarding and convenient. You
								still keep your original credit cards rewards but now you earn an additional 1%
								instant cashback on top, wherever you are in the world. Happy travels!
							</p>
						</InfoGroup>
						<Styles.TravelCashbackBrands>
							<p className='is-hidden-tablet travel-cashback__mobile-p'>
								Enjoy 1% instant cashback in all of these retailers...
							</p>
							<Styles.TravelCashbackBrandsList className='columns is-multiline is-mobile'>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-offset-1-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/easyjet.svg'
											alt='Easyjet logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/four-seasons.svg'
											alt='Four Season logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/shell.svg'
											alt='Shell logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836237/website-v2/Icons/uber.svg'
											alt='Uber logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836237/website-v2/Icons/starbucks.svg'
											alt='Starbuck logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow is-offset-1-tablet travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/netflix.svg'
											alt='Netflix logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/amazon.svg'
											alt='Amazon logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/gett.svg'
											alt='Gett logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836237/website-v2/Icons/spotify.svg'
											alt='Spotify logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item is-hidden-mobile'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536938437/website-v2/Icons/bp.svg'
											alt='BP logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
							</Styles.TravelCashbackBrandsList>
							<p className='is-hidden-tablet'>and many more...</p>
						</Styles.TravelCashbackBrands>
						<Styles.TravelCashbackImage className=' is-hidden-mobile'>
							<span />
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536938947/website-v2/Travel/cashback-card.png'
								srcSet='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536938947/website-v2/Travel/cashback-card_2x.png 2x'
								alt='Curve rewards'
							/>
						</Styles.TravelCashbackImage>
					</Styles.TravelCaskbackCopy>
				</Styles.TravelCashbackContent>
				{/* <Styles.TravelCashbackSplash2 /> */}
			</Styles.TravelCashback>
		);
	}
}

export default Cashback;
