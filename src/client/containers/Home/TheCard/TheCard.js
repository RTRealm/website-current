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
						<NextParticleHome />
						{/* <Image
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
						/> */}
					</Styles.YourCardMainImage>

					<Styles.YourCardTag className='column is-6'>
						<BodyDispVirt title={this.textBody('introTitle')} theme='themeBlack' page='home'>
							{/* <p>{this.textBody('welcomeDescription')}</p> */}
							<p className='is-hidden-mobile'>{this.textBody('welcomeDescription')}</p>
						</BodyDispVirt>
					</Styles.YourCardTag>
				</div>
				<Styles.YourCardPRWrapper>
					<Styles.YourCardPR className='columns is-mobile is-multiline'>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578663809/landingpage/scrumorg.svg'
								alt='Scrum'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578144500/landingpage/cisco.svg'
								alt='CCNP'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578665789/landingpage/ITILlogo.svg'
								alt='Itil'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578667530/landingpage/leanlogo.svg'
								alt='Sixsigma'
							/>
						</li>
						<li className='column is-narrow '>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578667536/landingpage/isacalogo.svg'
								alt='Isaca'
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578672943/landingpage/agilelogo.svg'
								alt='Agile'
							/>
						</li>
					</Styles.YourCardPR>
				</Styles.YourCardPRWrapper>
			</Styles.YourCard>
		);
	}
}
