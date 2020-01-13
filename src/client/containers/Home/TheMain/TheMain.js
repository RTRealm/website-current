import React, { PureComponent } from 'react';

import BodyDispVirt from '../../../components/BodyDispVirt/BodyDispVirt';
import Image from '../../../components/Image/Image';
import { Text } from '../../Language';

import NextParticleHome from '../../../NextParticle/NextParticleHome';

import * as Styles from './TheMain.styles';

export default class TheMain extends PureComponent {
	textBody = text => {
		return <Text tid={text} />;
	};
	render() {
		return (
			<Styles.TheMain>
				<div className='columns'>
					<Styles.TheMainImage className='column is-6'>
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
					</Styles.TheMainImage>
					<Styles.TheMainTag className='column is-6'>
						<BodyDispVirt title={this.textBody('introTitle')} theme='themeBlack' page='home'>
							<p>{this.textBody('welcomeDescription')}</p>
						</BodyDispVirt>
					</Styles.TheMainTag>
				</div>
				<Styles.TheMainCredWrapper>
					<Styles.TheMainCred className='columns is-hidden-mobile is-multiline'>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578663809/landingpage/scrumorg.svg'
								alt='Scrum'
								style={{ width: '50px' }}
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578144500/landingpage/cisco.svg'
								alt='CCNP'
								style={{ width: '50px' }}
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578665789/landingpage/ITILlogo.svg'
								alt='Itil'
								style={{ width: '70px' }}
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578677143/landingpage/agilelogo.svg'
								alt='Agile'
								style={{ width: '80px' }}
							/>
						</li>
						<li className='column is-narrow '>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578667536/landingpage/isacalogo.svg'
								alt='Isaca'
								style={{ width: '100px' }}
							/>
						</li>
						<li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/ohcash/image/upload/v1578667530/landingpage/leanlogo.svg'
								alt='Sixsigma'
								style={{ width: '50px' }}
							/>
						</li>
					</Styles.TheMainCred>
				</Styles.TheMainCredWrapper>
			</Styles.TheMain>
		);
	}
}
