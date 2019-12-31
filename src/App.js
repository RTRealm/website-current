import React, { Component } from 'react';
import Routes from './client/containers/routes';
import ScrollToTop from './client/components/ScrollToTop/ScrollToTop';
import * as Styles from './App.styles';
import CookieBanner from './client/components/CookieBanner/CookieBanner';
import { LanguageProvider } from './client/containers/Language';

class App extends Component {
	state = {
		cookies: false
	};
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
		if (localStorage.getItem('cookieAcknowledgement')) {
			this.setState({ cookies: true });
		}
	}

	render() {
		return (
			<Styles.App>
				<LanguageProvider>
					<div id='content'>
						<ScrollToTop>
							<Routes />
							{/* <Routes>{this.state.cookies ? <CookieBanner /> : null}</Routes> */}
						</ScrollToTop>
					</div>
				</LanguageProvider>
			</Styles.App>
		);
	}
}

export default App;
