import React from 'react';
import { Text } from '../../containers/Language';

const textBody = text => {
	return <Text tid={text} />;
};

const Tab = props => {
	let width = document.querySelector('body').clientWidth;
	return (
		<div className={width >= 599 ? 'tabs is-left' : 'tabs is-centered is-small'}>
			<ul>
				<li className={props.activeTab === 1 ? 'is-active' : ''}>
					<a
						onClick={() => {
							props.toggleList(1);
						}}
					>
						{textBody('tab1')}
					</a>
				</li>
				<li className={props.activeTab === 2 ? 'is-active' : ''}>
					<a
						onClick={() => {
							props.toggleList(2);
						}}
					>
						{textBody('tab2')}
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Tab;
