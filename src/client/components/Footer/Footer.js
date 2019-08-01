import React from 'react';
import * as Styles from './Footer.styles';

import FooterNav from './FooterNav/FooterNav';

const Footer = props => {
	return (
		<Styles.Footer>
			<FooterNav page={props.page} />
		</Styles.Footer>
	);
};

export default Footer;
