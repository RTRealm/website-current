import React from 'react';

// Custom components
import BodyDispVirt from '../../../components/BodyDispVirt/BodyDispVirt';

import { Text } from '../../../containers/Language';

// Styles
import * as Styles from './Intro.styles';

const textBody = text => {
	return <Text tid={text} />;
};

const intro = () => {
	return (
		<Styles.Intro className='columns'>
			<Styles.IntroImage className='is-6 column'>
				{/* <img
					src='https://'
					srcSet='https:// 665w'
					alt='Curve card'
					className='is-hidden-tablet'
				/> */}
				<img
					// src='https://res.cloudinary.com/ohcash/image/upload/v1576925844/landingpage/Intro1-large.png'
					srcSet='https://res.cloudinary.com/ohcash/image/upload/v1576925844/landingpage/Intro1-large.png 2x'
					alt='Curve card'
					className='is-hidden-mobile'
				/>
			</Styles.IntroImage>
			<Styles.IntroContent className='column is-6'>
				<BodyDispVirt title={textBody('introTitle')} theme='themeBlack' page='home'>
					<p className='is-hidden-mobile'>{textBody()}</p>
					<p>{textBody('welcomeDescription')}</p>
				</BodyDispVirt>
			</Styles.IntroContent>
		</Styles.Intro>
	);
};

export default intro;
