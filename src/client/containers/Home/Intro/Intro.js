import React from 'react';

// Custom components
import BodyDispVirt from '../../../components/BodyDispVirt/BodyDispVirt';

import { Text } from '../../../containers/Language';

// Styles
import * as Styles from './Intro.styles';

const textBody = () => {
	return <Text tid='welcomeDescription' />;
};
const textTitle = () => {
	return <Text tid='introTitle' />;
};

const intro = () => {
	return (
		<Styles.Intro className='columns'>
			<Styles.IntroImage className='is-6 column'>
				{/* <img
					src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536831291/website-v2/Travel/main-card-m.png'
					srcSet='https://res.cloudinary.com/dzatxn6bx/image/upload/v1536831292/website-v2/Travel/main-card-m_2x.png 2x, https://res.cloudinary.com/dzatxn6bx/image/upload/v1536855793/website-v2/Travel/main-card.png 665w'
					alt='Curve card'
					className='is-hidden-tablet'
				/> */}
				<img
					src='https://res.cloudinary.com/ohcash/image/upload/v1576925844/landingpage/Intro1-large.png'
					srcSet='https://res.cloudinary.com/ohcash/image/upload/v1576925844/landingpage/Intro1-large.png 2x'
					alt='Curve card'
					className='is-hidden-mobile'
				/>
			</Styles.IntroImage>
			<Styles.IntroContent className='column is-6'>
				<BodyDispVirt title={textTitle()} theme='themeBlack' page='home'>
					<p className='is-hidden-mobile'>{textBody()}</p>
				</BodyDispVirt>
			</Styles.IntroContent>
		</Styles.Intro>
	);
};

export default intro;
