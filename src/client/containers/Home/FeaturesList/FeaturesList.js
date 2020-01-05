import React from 'react';

import * as Styles from './FeaturesList.styles';

const FeaturesList = () => {
	return (
		<Styles.FeaturesList>
			<Styles.FeaturesListContent>
				<Styles.FeaturesListItem className='features-list__item--sync'>
					<span />
					<h3>Software engineering</h3>
					<p>
						This is our bread and butter. We live and breath software development. And it is not
						only about coding: we'll implement and maintain your app, so that it's trouble-free for
						you. All this with cutting edge technologies.
					</p>
				</Styles.FeaturesListItem>
				<Styles.FeaturesListItem className='features-list__item--insights'>
					<span />
					<h3>Consultancy</h3>
					<p>
						We combine the tech know-how with the business line logic. Let's discuss your system
						design, implementaion and optimization options.
					</p>
				</Styles.FeaturesListItem>
				<Styles.FeaturesListItem className='features-list__item--abroad'>
					<span />
					<h3>Outsourcing</h3>
					<p>
						Tired with running your systems? Want to focus on your core business? Reach out to us
						and we'll manage it for you.
					</p>
				</Styles.FeaturesListItem>
			</Styles.FeaturesListContent>
		</Styles.FeaturesList>
	);
};

export default FeaturesList;
