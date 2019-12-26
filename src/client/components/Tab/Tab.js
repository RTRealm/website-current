import React, { Component } from 'react';
import * as Styles from './Tab.styles';

const Tab = props => {
	return (
		<div className='tabs is-center is-toggle-rounded'>
			<ul>
				<li className={props.activeTab === 1 && 'is-active'}>
					<a
						onClick={() => {
							props.toggleList();
						}}
					>
						Credentials
					</a>
				</li>
				<li className={props.activeTab === 2 && 'is-active'}>
					<a
						onClick={() => {
							props.toggleList();
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
