import React from 'react';

import * as Styles from './FeaturesList.styles';

const FeaturesList = () => {
	return (
		<Styles.FeaturesList>
			<Styles.FeaturesListContent>
				<Styles.FeaturesListItem className='features-list__item--sync'>
					<span />
					<h3>Software house and more...</h3>
					<p>
						Add unlimited debit and credit cards to your Curve App and choose which one you want to
						pay with from the App using your Curve Card
					</p>
				</Styles.FeaturesListItem>
				<Styles.FeaturesListItem className='features-list__item--insights'>
					<span />
					<h3>Development</h3>
					<p>
						Curve helps you take back control of your spending by showing you rich insights
						instantly in the App
					</p>
				</Styles.FeaturesListItem>
				<Styles.FeaturesListItem className='features-list__item--abroad'>
					<span />
					<h3>Tech Consultancy</h3>
					<p>No currency exchange fees when spending abroad with Curve.</p>
				</Styles.FeaturesListItem>
			</Styles.FeaturesListContent>
		</Styles.FeaturesList>
	);
};

export default FeaturesList;
