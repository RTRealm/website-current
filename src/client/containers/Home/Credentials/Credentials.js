import React, { Component } from 'react';
import * as Styles from './Credentials.styles';
import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import Tab from '../../../components/Tab/Tab';
import { Text } from '../../Language';

import * as scrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(scrollMagic, TweenMax, TimelineMax);

class Credentials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 1,
		};
	}
	controller = null;
	scene = null;

	textBody = (text) => {
		return <Text tid={text} />;
	};

	handleListLoad = (list) => {
		const gsap = require('gsap');
		let width = document.querySelector('body').clientWidth;
		if (width >= 1224) {
			this.controller = new scrollMagic.Controller();

			this.scene = new scrollMagic.Scene({
				triggerElement: '.credentials-techstack__content',
			})
				// .setTween(() =>
				// 	gsap.TweenMax.staggerTo(
				// 		'.credentials-techstack__brands-item',
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
						ease: gsap.Power1.easeOut,
					})
				)
				.reverse(false)
				.addTo(this.controller);
			this.scene.triggerHook(0.25);
		}
	};

	toggleList = (activeTab) => {
		this.setState(() => {
			return { activeTab: activeTab };
		});
	};

	componentDidMount() {
		this.handleListLoad('.credentials-techstack__brands-item');
	}

	componentWillUnmount() {
		if (this.controller) {
			this.controller.destroy();
			this.scene.destroy();
		}
	}

	render() {
		return (
			<Styles.Credentials>
				<Styles.CredentialsContent className='credentials-techstack__content'>
					<Styles.CredentialsCopy>
						<InfoGroup title={this.textBody('titleCB')} subtitle={this.textBody('subtitleCB')}>
							<p>{this.textBody('bodyCB1')}</p>
							<p>{this.textBody('bodyCB2')}</p>
						</InfoGroup>
						<Styles.CredentialsBrands>
							{/* <p className='is-hidden-tablet is-hidden-mobile credentials-techstack__mobile-p'>
								Enjoy 1% instant cashback in all of these retailers...
							</p> */}
							<Tab activeTab={this.state.activeTab} toggleList={this.toggleList} />
							<Styles.CredentialsBrandsList
								className=' columns is-multiline is-mobile'
								id='brandlist'
								style={this.state.activeTab === 1 ? { display: 'flex' } : { display: 'none' }}
							>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-offset-1-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578058360/landingpage/credentials/BNP-Paribas.svg'
											alt='BNPP'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578065826/landingpage/credentials/bp2s.svg'
											alt='BP2S'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578065770/landingpage/credentials/ipopema.svg'
											alt='Ipopema'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578058054/landingpage/credentials/henkel.svg'
											alt='Henkel'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578058311/landingpage/credentials/taurus.svg'
											alt='Taurus'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow is-offset-1-tablet credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578067170/landingpage/credentials/dataspan1.svg'
											alt='DataSpan'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578067714/landingpage/credentials/be1.svg'
											alt='Be'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1587229349/landingpage/credentials/ignibit.svg'
											alt='Ignibit'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1579532497/landingpage/credentials/raiffeisen-logo.svg'
											alt='Raiffeisen'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
								<Styles.CredentialsBrandsItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item is-hidden-mobile'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578066134/landingpage/credentials/redsandLabs.svg'
											alt='Redsand'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsBrandsItem>
							</Styles.CredentialsBrandsList>
							<Styles.CredentialsTechList
								className=' columns is-multiline is-mobile'
								id='techlist'
								style={this.state.activeTab === 2 ? { display: 'flex' } : { display: 'none' }}
							>
								<Styles.CredentialsTechItem
									className='column is-4-mobile is-2-tablet is-offset-1-tablet is-narrow credentials-techstack__brands-item'
									id='techlist'
								>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043359/landingpage/techlogos/angular.svg'
											alt='Angular'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043357/landingpage/techlogos/react.svg'
											alt='React'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043334/landingpage/techlogos/graphql.svg'
											alt='GraphQL'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1579534116/landingpage/techlogos/ms-logo.svg'
											alt='Microsoft'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043333/landingpage/techlogos/aws.svg'
											alt='AWS'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow is-offset-1-tablet credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1579534264/landingpage/techlogos/google-cloud-logo.svg'
											alt='Google Cloud'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578053533/landingpage/techlogos/nodejs-black.svg'
											alt='Nodejs'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578070946/landingpage/techlogos/sketch.svg'
											alt='Sketch'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578053670/landingpage/techlogos/java.svg'
											alt='Java'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
								<Styles.CredentialsTechItem className='column is-4-mobile is-2-tablet is-narrow credentials-techstack__brands-item is-hidden-mobile'>
									<span />
									<Styles.CredentialsBrandsImage>
										<img
											src='https://res.cloudinary.com/ohcash/image/upload/v1578043335/landingpage/techlogos/rn.svg'
											alt='ReactNative'
										/>
									</Styles.CredentialsBrandsImage>
								</Styles.CredentialsTechItem>
							</Styles.CredentialsTechList>
							{/* <p className='is-hidden-tablet'>and many more...</p> */}
							<p>{this.textBody('bodyCB3')}</p>
						</Styles.CredentialsBrands>
						<Styles.CredentialsImage className=' is-hidden-mobile'>
							<span />
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578527117/landingpage/credentials_1x.png'
								srcSet='https://res.cloudinary.com/ohcash/image/upload/v1578527128/landingpage/credentials_2x.png 2x'
								alt='Golden Angel'
							/>
						</Styles.CredentialsImage>
					</Styles.CredentialsCopy>
				</Styles.CredentialsContent>
			</Styles.Credentials>
		);
	}
}

export default Credentials;
