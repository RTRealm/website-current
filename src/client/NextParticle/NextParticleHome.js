import { NextParticleAnim } from './NextParticleAnim';
import React, { useEffect, useState } from 'react';

import './NextParticle.css';

export const NextParticleHome = () => {
	const [settings, setSettings] = useState({
		// colorArr: undefined,
		renderer: 'default',
		imageUrl: 'https://res.cloudinary.com/ohcash/image/upload/v1578418720/landingpage/plh.png',
		particleGap: 4,
		gravity: 0.08,
		noise: 10,
		width: Math.min(window.innerWidth - 30, 1140),
		height: Math.min(window.innerHeight - 120 - 30, 600),
		maxWidth: 250,
		maxHeight: 250,
		mouseForce: 60,
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
			width: Math.min(window.innerWidth - 30, 1140),
			height: Math.min(window.innerHeight - 120 - 30, 600)
		});
	};

	useEffect(() => {
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	return (
		<div className='home'>
			<NextParticleAnim {...settings} className='next-particle' />
		</div>
	);
};

export default NextParticleHome;
