import React from 'react';
import * as Styles from './Tab.styles';

const Tab = props => {
	return (
		<div>
			<Styles.Tab>
				<p>{props.label}</p>
			</Styles.Tab>
		</div>
	);
};

export default Tab;
