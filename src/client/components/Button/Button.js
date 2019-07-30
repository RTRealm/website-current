import React from 'react';
import * as Styles from './Button.styles';

const Button = props => {
	return (
		<div>
			<Styles.Button>{props.text}</Styles.Button>
		</div>
	);
};

export default Button;
