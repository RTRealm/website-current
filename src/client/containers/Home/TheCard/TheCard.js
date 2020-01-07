import React, { PureComponent } from 'react';

import BodyDispVirt from '../../../components/BodyDispVirt/BodyDispVirt';
import Image from '../../../components/Image/Image';
import { Text } from '../../../containers/Language';

import NextParticleHome from '../../../NextParticle/NextParticleHome';

import * as Styles from './TheCard.styles';

export default class TheCard extends PureComponent {
	textBody = text => {
		return <Text tid={text} />;
	};
	render() {
		return (
			<Styles.YourCard>
				<div className='columns'>
					<Styles.YourCardMainImage className='column is-6'>
						{/* <NextParticleHome className='img' /> */}
						<Image
							set={{
								mob: true,
								desk: true
							}}
							source={{
								mob:
									'https://landingpagereactreact-local.s3.eu-central-1.amazonaws.com/main-mob.png',
								desk:
									'https://landingpagereactreact-local.s3.eu-central-1.amazonaws.com/main-web.png'
							}}
							size={{ max: 'max-width:768px', min: 'min-width:769px' }}
							alt='RTR desktop and mobile dev'
							defaultFormat='png'
						/>
					</Styles.YourCardMainImage>

					<Styles.YourCardTag className='column is-6'>
						<BodyDispVirt title={this.textBody('introTitle')} theme='themeBlack' page='home'>
							<p className='is-hidden-mobile'>{this.textBody('welcomeDescription')}</p>
						</BodyDispVirt>
					</Styles.YourCardTag>
				</div>
				<Styles.YourCardPRWrapper>
					<Styles.YourCardPR className='columns is-mobile is-multiline'>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578144500/landingpage/cisco.svg'
								alt='Wired'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541082226/website-v2/Icons/techcrunch-black.svg'
								alt='Tech Crunch'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541082226/website-v2/Icons/telegraph-black.svg'
								alt='Telegraph'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541082226/website-v2/Icons/sundaytime-black.svg'
								alt='The Sunday Times'
							/>
						</li>
						<li className='column is-narrow '>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541082226/website-v2/Icons/forbes-black.svg'
								alt='Forbes'
							/>
						</li>
						<li className='column is-narrow is-hidden-mobile'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541082226/website-v2/Icons/wallstreetjourney-black.svg'
								alt='The Wall Street Journal'
							/>
						</li>
					</Styles.YourCardPR>
				</Styles.YourCardPRWrapper>
			</Styles.YourCard>
		);
	}
}
