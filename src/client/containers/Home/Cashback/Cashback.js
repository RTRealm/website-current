import React, { Component } from 'react';
import * as Styles from './Cashback.styles';
import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import Tab from '../../../components/Tab/Tab';
import { Text } from '../../Language';

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

	textBody = text => {
		return <Text tid={text} />;
	};

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
				{/* <Styles.TravelCashbacksplash3 className=' is-hidden-mobile' /> */}
				<Styles.TravelCashbackContent className='travel-cashback__content'>
					<Styles.TravelCaskbackCopy>
						<InfoGroup title={this.textBody('titleCB')} subtitle={this.textBody('subtitleCB')}>
							<p>{this.textBody('bodyCB1')}</p>
							<p>{this.textBody('bodyCB2')}</p>
						</InfoGroup>
						<Styles.TravelCashbackBrands>
							{/* <p className='is-hidden-tablet is-hidden-mobile travel-cashback__mobile-p'>
								Enjoy 1% instant cashback in all of these retailers...
							</p> */}
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
											src='https://res.cloudinary.com/ohcash/image/upload/v1578058360/landingpage/credentials/BNP-Paribas.svg'
											alt='BNPP'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578065826/landingpage/credentials/bp2s.svg'
											alt='BP2S'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578065770/landingpage/credentials/ipopema.svg'
											alt='Ipopema'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578058054/landingpage/credentials/henkel.svg'
											alt='Henkel'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578058311/landingpage/credentials/taurus.svg'
											alt='Taurus'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow is-offset-1-tablet travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578067170/landingpage/credentials/dataspan1.svg'
											alt='DataSpan'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578067714/landingpage/credentials/be1.svg'
											alt='Be'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578067324/landingpage/credentials/neoprof1.svg'
											alt='Neoprof'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578066134/landingpage/credentials/redsandLabs.svg'
											alt='Redsand'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackBrandsItem>
								<Styles.TravelCashbackBrandsItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item is-hidden-mobile'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578067421/landingpage/credentials/itkontrakt.svg'
											alt='ITkontrakt'
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
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043359/landingpage/techlogos/angular.svg'
											alt='Angular'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043357/landingpage/techlogos/react.svg'
											alt='React'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043335/landingpage/techlogos/rn.svg'
											alt='React Native'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043334/landingpage/techlogos/graphql.svg'
											alt='GraphQL'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043333/landingpage/techlogos/aws.svg'
											alt='AWS'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow is-offset-1-tablet travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043333/landingpage/techlogos/firebase.svg'
											alt='Firebase'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578053533/landingpage/techlogos/nodejs-black.svg'
											alt='Nodejs'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578053670/landingpage/techlogos/redux.svg'
											alt='Redux'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578053670/landingpage/techlogos/java.svg'
											alt='Java'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
								<Styles.TravelCashbackTechItem className='column is-4-mobile is-2-tablet is-narrow travel-cashback__brands-item is-hidden-mobile'>
									<span />
									<Styles.TravelCashbackBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578070946/landingpage/techlogos/sketch.svg'
											alt='Sketch'
										/>
									</Styles.TravelCashbackBrandsImage>
								</Styles.TravelCashbackTechItem>
							</Styles.TravelCashbackTechList>
							{/* <p className='is-hidden-tablet'>and many more...</p> */}
							<p>{this.textBody('bodyCB3')}</p>
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
