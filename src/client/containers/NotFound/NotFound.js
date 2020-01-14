import React, { Component } from 'react';

// import ReactGA from "react-ga";

import Page from '../../components/Page';
import { Text } from '../Language';

import * as Styles from './NotFound.styles';

class NotFound extends Component {
	componentDidMount() {
		// ReactGA.pageview(window.location.pathname);
	}

	textBody = text => {
		return <Text tid={text} />;
	};

	onClickHander() {}

	render() {
		return (
			<Page id='not-found' title='Not Found |' description='Lost in timespace.' noCrawl>
				<Styles.NotFound>
					<img
						src='https://res.cloudinary.com/ohcash/image/upload/v1579014408/landingpage/404_1.png'
						alt='404'
					/>
					<h1>{this.textBody('notFoundH1')}</h1>
					<p>{this.textBody('notFoundH2')}</p>
					<Styles.HomeLink href='/'>{this.textBody('notFoundButton')}</Styles.HomeLink>
				</Styles.NotFound>
			</Page>
		);
	}
}

export default NotFound;
