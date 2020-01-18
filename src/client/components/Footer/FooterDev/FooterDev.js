import React from 'react';

// import LazyLoad from 'react-lazyload';

import { Text } from '../../../containers/Language';
// Styles
import * as Styles from './FooterDev.styles';

const FooterDev = () => {
	const textBody = text => {
		return <Text tid={text} />;
	};
	return (
		<Styles.Disclaimer>
			<Styles.DisclaimerContent>
				<p>{textBody('footerPowered')}</p>
				<p>{textBody('footerBrandname')}</p>
				<p>{textBody('footerSince')}</p>

				{/* <LazyLoad once={true} height={44} offset={100}>
					<Styles.DisclaimerAppStores className='columns is-mobile is-centered'>
						<li className='column is-narrow'>
							<a
								className='is-hidden-tablet'
								href='https://imaginecurve.onelink.me/3972912079/1c0b627b'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='AppStore'
								data-eventaction='Go to App store'
								data-eventlabel={`App Store - ${props.page} footer disclaimer`}
							>
								<img
									src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548182921/website-v2/Icons/app-store-white-m.svg'
									alt='App Store'
								/>
							</a>
							<a
								className='is-hidden-mobile'
								href='https://itunes.apple.com/gb/app/id1049397112?mt=8'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='AppStore'
								data-eventaction='Go to App store'
								data-eventlabel={`App Store - ${props.page} footer disclaimer`}
							>
								<img
									src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548182606/website-v2/Icons/app-store-white.svg'
									alt='App Store'
								/>
							</a>
						</li>
						<li className='column is-narrow'>
							<a
								className='is-hidden-tablet'
								href='https://imaginecurve.onelink.me/3972912079/1c0b627b'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='PlayStore'
								data-eventaction='Go to Play store'
								data-eventlabel={`Play Store - ${props.page} footer disclaimer`}
							>
								<img
									src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548182921/website-v2/Icons/play-store-white-m.svg'
									alt='Play Store'
								/>
							</a>
							<a
								className='is-hidden-mobile'
								href='https://play.google.com/store/apps/details?id=com.imaginecurve.curve.prd&hl=en_GB&af_prt=Rebelhack&pid=imaginecurve.com'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='PlayStore'
								data-eventaction='Go to Play store'
								data-eventlabel={`Play Store - ${props.page} footer disclaimer`}
							>
								<img
									src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548182549/website-v2/Icons/play-store-white.svg'
									alt='Play Store'
								/>
							</a>
						</li>
					</Styles.DisclaimerAppStores>
				</LazyLoad> */}
			</Styles.DisclaimerContent>
		</Styles.Disclaimer>
	);
};

export default FooterDev;
