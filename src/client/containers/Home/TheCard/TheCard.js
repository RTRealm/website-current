import React, { PureComponent } from 'react';

import BodyDispVirt from '../../../components/BodyDispVirt/BodyDispVirt';
import Image from '../../../components/Image/Image';

import * as Styles from './TheCard.styles';

export default class TheCard extends PureComponent {
	render() {
		return (
			<Styles.YourCard>
				<div className='columns'>
					<Styles.YourCardMainImage className='column is-5'>
						<Image
							set={{
								mob: true,
								desk: true
							}}
							source={{
								mob:
									'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537449190/website-v2/Homepage/Light/your-card-phone-m',
								desk:
									'https://res.cloudinary.com/dzatxn6bx/image/upload/v1548240636/website-v2/Homepage/Light/home-intro-phone'
							}}
							size={{ max: 'max-width:768px', min: 'min-width:769px' }}
							alt='Virt card and mobile app'
							defaultFormat='png'
						/>
					</Styles.YourCardMainImage>
					<Styles.YourCardTag className='column is-7'>
						<BodyDispVirt title='Comprehensive IT services' theme='themeBlack' page='home'>
							<p className='is-hidden-mobile'>
								Connect your cards to Virt and enjoy a whole new banking experience. One Interface.
								One Virt card.
							</p>
						</BodyDispVirt>
					</Styles.YourCardTag>
				</div>
				<Styles.YourCardPRWrapper>
					<Styles.YourCardPR className='columns is-mobile is-multiline'>
						{/* <li className='column is-narrow'>
							<img
								src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1541082226/website-v2/Icons/wired-black.svg'
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
						</li> */}
					</Styles.YourCardPR>
				</Styles.YourCardPRWrapper>
			</Styles.YourCard>
		);
	}
}
