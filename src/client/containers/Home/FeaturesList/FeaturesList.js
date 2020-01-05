import React from 'react';
import { Text } from '../../Language';

import * as Styles from './FeaturesList.styles';

const textBody = text => {
	return <Text tid={text} />;
};

const FeaturesList = () => {
	return (
		<Styles.FeaturesList>
			<Styles.FeaturesListContent>
				<Styles.FeaturesListItem className='features-list__item--sync'>
					<span />
					<h3>{textBody('titleFL1')}</h3>
					<p>{textBody('bodyFL1')}</p>
				</Styles.FeaturesListItem>
				<Styles.FeaturesListItem className='features-list__item--insights'>
					<span />
					<h3>{textBody('titleFL2')}</h3>
					<p>{textBody('bodyFL2')}</p>
				</Styles.FeaturesListItem>
				<Styles.FeaturesListItem className='features-list__item--abroad'>
					<span />
					<h3>{textBody('titleFL3')}</h3>
					<p>{textBody('bodyFL3')}</p>
				</Styles.FeaturesListItem>
			</Styles.FeaturesListContent>
		</Styles.FeaturesList>
	);
};

export default FeaturesList;
