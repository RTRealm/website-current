import React from 'react';
import phone1 from '../../img/pictureAllCards.png';
import phone2 from '../../img/pictureOneCard.png';

export default function BodyDispVirt() {
	return (
		<div class='container'>
			<p>TEST</p>
			<img src={phone1} alt='logo' style={{ height: 600, width: 380 }} />
			<img src={phone2} alt='logo' />
		</div>
	);
}


