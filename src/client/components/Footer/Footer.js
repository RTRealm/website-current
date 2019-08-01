import React from 'react';
import * as Styles from './Footer.styles';

import FooterNav from './FooterNav/FooterNav';

export default function Footer() {
	return (
		<Styles.Footer>
			<div className='is-hidden-mobile'>
				<FooterNav />
			</div>
		</Styles.Footer>
	);
}
