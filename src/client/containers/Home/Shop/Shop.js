import React, { Component } from 'react';
import * as Styles from './Shop.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import { Text } from '../../Language';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Shop extends Component {
	controller = null;
	scene = null;

	textBody = (text) => {
		return <Text tid={text} />;
	};

	componentDidMount() {
		const gsap = require('gsap');

		let width = document.querySelector('body').clientWidth;

		if (width >= 1224) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.Shop__content',
			})
				.setTween(
					gsap.TweenLite.to('.Shop__features-item', 1, {
						autoAlpha: 1,
						display: 'block',
						top: 0,
						ease: gsap.Power1.easeOut,
					})
				)
				.reverse(false)
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
			<Styles.Shop>
				<Styles.ShopContent className='Shop__content'>
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
								src='https://res.cloudinary.com/ohcash/image/upload/v1601323978/landingpage/shop_desktop_sml.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1601323978/landingpage/shop_desktop_large.png 2x'
								alt='Phone displaying trading page'
							/>
						</div>
						<Styles.ShopCopy className='column is-offset-1'>
							<InfoGroup title={this.textBody('titleSH')} subtitle={this.textBody('subtitleSH')}>
								<p>{this.textBody('bodySH1')}</p>
								<p>{this.textBody('bodySH2')}</p>
							</InfoGroup>
							<Styles.ShopFeatures className='columns is-narrow is-mobile'>
								<Styles.ShopFeaturesItem className='column Shop__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1601319828/landingpage/shopify-partner200.svg'
										alt='Shopify'
									/>
								</Styles.ShopFeaturesItem>
								{/* <Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578144498/landingpage/cfa-logo.svg'
										alt='CFA'
									/>
								</Styles.SimplicityFeaturesItem> */}
								{/* <Styles.SimplicityFeaturesItem className='column simplicity__features-item'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578144498/landingpage/cfa-logo.svg'
										alt='CFA'
									/>
								</Styles.SimplicityFeaturesItem> */}
							</Styles.ShopFeatures>
						</Styles.ShopCopy>
					</div>
				</Styles.ShopContent>
			</Styles.Shop>
		);
	}
}

export default Shop;
