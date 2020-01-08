import { NextParticleAnim } from './NextParticleAnim';
import React, { useEffect, useState } from 'react';

import './NextParticle.css';

export const NextParticleHome = () => {
	const [settings, setSettings] = useState({
		colorArr: undefined,
		renderer: 'default',
		imageUrl:
			'https://res.cloudinary.com/ohcash/image/upload/v1578489583/landingpage/logoRTblack510.svg',
		particleGap: 1,
		gravity: 0.1,
		noise: 7,
		// width: Math.min(window.innerWidth - 30, 1140),
		width: Math.min(window.innerHeight - 120 - 30, 500),
		height: Math.min(window.innerHeight - 120 - 30, 500),
		maxWidth: 300,
		maxHeight: 300,
		mouseForce: 30,
		clickStrength: 100
		// particleSize: 1,
		// layerCount: 2,
		// layerDistance: 5,
		// depth: 1,
		// lifeCycle: false,
		// growDuration: 200,
		// waitDuration: 200,
		// shrinkDuration: 200,
		// shrinkDistance: 50
	});

	const mergeSettings = partialSettings => setSettings({ ...settings, ...partialSettings });

	const resizeWindow = () => {
		mergeSettings({
			// width: Math.min(window.innerWidth - 30, 1140),
			width: Math.min(window.innerHeight - 120 - 30, 500),
			height: Math.min(window.innerHeight - 120 - 30, 500)
		});
	};

	useEffect(() => {
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	return (
		<div className='home-np'>
			<NextParticleAnim {...settings} className='next-particle' />
		</div>
	);
};

export default NextParticleHome;
