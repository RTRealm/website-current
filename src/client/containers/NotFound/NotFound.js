import React, { Component } from 'react';

// import ReactGA from "react-ga";

import Page from '../../components/Page';

import * as Styles from './NotFound.styles';

class NotFound extends Component {
	componentDidMount() {
		// ReactGA.pageview(window.location.pathname);
	}

	onClickHander() {}

	render() {
		return (
			<Page id='not-found' title='Not Found |' description='Lost in timespace.' noCrawl>
				<Styles.NotFound>
					<img
						src='https://res.cloudinary.com/ohcash/image/upload/v1579014408/landingpage/404_1.png'
						alt='404'
					/>
					<h1>Ooops...! The page you are looking for has never been created...</h1>
					<p>or is lost like tears in the rain...</p>
					<Styles.HomeLink href='/'>let's go back</Styles.HomeLink>
				</Styles.NotFound>
			</Page>
		);
	}
}

export default NotFound;
