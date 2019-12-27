import React, { Component } from 'react';
import * as Styles from './Tab.styles';

const Tab = props => {
	let width = document.querySelector('body').clientWidth;
	return (
		<div
			className={
				width >= 599
					? 'tabs is-left is-toggle-rounded'
					: 'tabs is-centered is-toggle-rounded is-small'
			}
		>
			<ul>
				<li className={props.activeTab === 1 ? 'is-active' : ''}>
					<a
						onClick={() => {
							props.toggleList(1);
						}}
					>
						Credentials
					</a>
				</li>
				<li className={props.activeTab === 2 ? 'is-active' : ''}>
					<a
						onClick={() => {
							props.toggleList(2);
						}}
					>
						Technologies
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Tab;
