import React, { Component } from 'react';
import Routes from './client/containers/routes';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import ScrollToTop from './client/components/ScrollToTop/ScrollToTop';

import * as Styles from './App.styles';

class App extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Styles.App>
				<div id='content'>
					<ScrollToTop>
						<Routes />
					</ScrollToTop>
				</div>
			</Styles.App>
		);
	}
}

export default withAuthenticator(App);
