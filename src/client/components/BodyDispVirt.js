import React from 'react';
import logo1 from '../../img/pictureAllCards.png';
import logo2 from '../../img/pictureOneCard.png';

export default function BodyDispVirt() {
	return (
		<div>
			<p>TEST</p>
			<img src={logo1} alt='logo' style={{ height: 600, width: 380 }} />
			<img src={logo2} alt='logo' />
		</div>
	);
}
