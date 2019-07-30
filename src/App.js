import React, { Component } from 'react';
import Routes from './client/containers/routes';

import * as Styles from './App.styles';

class App extends Component {
	render() {
		return (
			<Styles.App>
				<div id='content'>
					<Routes />
				</div>
			</Styles.App>
		);
	}
}

export default App;
