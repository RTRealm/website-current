import React, { Component } from 'react';
import * as Styles from './Cashback.styles';
import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import Tab from '../../../components/Tab/Tab';

// import { gsap } from 'gsap';
import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
// import { isConstructSignatureDeclaration } from 'typescript';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Cashback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1
		};
	}
	controller = null;
	scene = null;

	handleListLoad = list => {
		const gsap = require('gsap');
		// const ScrollMagic = require('scrollmagic');
		// require('animation.gsap');
		let width = document.querySelector('body').clientWidth;
		if (width >= 1224) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.travel-cashback__content'
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
					gsap.TweenLite.to(list, 1, {
						autoAlpha: 1,
						display: 'block',
						top: 0,
						ease: gsap.Power1.easeOut
					})
				)
				.reverse(false)
				.addTo(this.controller);
			this.scene.triggerHook(0.25);
		}
	};

	toggleList = activeTab => {
		this.setState(() => {
			return { activeTab: activeTab };
		});
	};

	componentDidMount() {
		this.handleListLoad('.travel-cashback__brands-item');
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
						<InfoGroup title={'Solution providers.'} subtitle={'Credentials & TechStack'}>
							<p>
								We put our clients interests first. Each day we develop our competences and master
								new technologies to make sure we deliver our clients the best solutions possible.
								Client satisfaction is at the center of what we do.
							</p>
						</InfoGroup>
						<Styles.TravelCashbackBrands>
							<p className='is-hidden-tablet is-hidden-mobile travel-cashback__mobile-p'>
								Enjoy 1% instant cashback in all of these retailers...
							</p>
							<Tab activeTab={this.state.activeTab} toggleList={this.toggleList} />
							<Styles.TravelCashbackBrandsList
								className=' columns is-multiline is-mobile'
								id='brandlist'
								style={this.state.activeTab === 1 ? { display: 'flex' } : { display: 'none' }}
							>
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
							{/* Tech list */}
							<Styles.TravelCashbackTechList
								className=' columns is-multiline is-mobile'
								id='techlist'
								style={this.state.activeTab === 2 ? { display: 'flex' } : { display: 'none' }}
							>
								<Styles.TravelCashbackTechItem
									className='column is-4-mobile is-2-tablet is-offset-1-tablet is-narrow travel-cashback__brands-item'
									id='techlist'
								>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577365946/techstack/angular.svg'
											alt='Angular'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577366053/techstack/react.svg'
											alt='React'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577366235/techstack/BNPParibas.svg'
											alt='BNPP'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1577366359/techstack/henkel.svg'
											alt='Henkel'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836237/website-v2/Icons/starbucks.svg'
											alt='Starbuck logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow is-offset-1-tablet travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/netflix.svg'
											alt='Netflix logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/amazon.svg'
											alt='Amazon logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836235/website-v2/Icons/gett.svg'
											alt='Gett logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836237/website-v2/Icons/spotify.svg'
											alt='Spotify logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item is-hidden-mobile'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536938437/website-v2/Icons/bp.svg'
											alt='BP logo'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
							</Styles.TravelCashbackTechList>
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
				<Styles.TravelCashbackSplash2 />
			</Styles.TravelCashback>
		);
	}
}

export default Cashback;
