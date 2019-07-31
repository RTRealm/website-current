import React from 'react';
import * as Styles from './InfoGroup.styles';

const InfoGroup = props => {
	return (
		<div className='info-group'>
			<Styles.InfoGroupSubTitle>{props.subtitle}</Styles.InfoGroupSubTitle>
			<Styles.InfoGroupTitle>{props.title}</Styles.InfoGroupTitle>
			<Styles.InfoGroupText>{props.children}</Styles.InfoGroupText>
		</div>
	);
};

export default InfoGroup;
