import React, { Component } from 'react';
import Routes from './client/containers/routes';
import ScrollToTop from './client/components/ScrollToTop/ScrollToTop';
import * as Styles from './App.styles';

import { LanguageProvider } from './client/containers/Language';

class App extends Component {
	// async getGeoInfo(langOpt) {
	// 	await fetch('https://ipapi.co/json/')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			const lang = langOpt.find(item => item.text === data.country_code);
	// 			localStorage.setItem('language', lang.id);
	// 			this.setState({ lang: lang.id });
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// }

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<LanguageProvider>
				<Styles.App>
					<div id='content'>
						<ScrollToTop>
							<Routes />
						</ScrollToTop>
					</div>
				</Styles.App>
			</LanguageProvider>
		);
	}
}

export default App;
