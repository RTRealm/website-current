import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import CookieBanner from '../../client/components/CookieBanner/CookieBanner';

function Loading(props) {
	if (props.error) {
		console.log('error', props.error);
		return (
			<div>
				Error!
				<button onClick={props.retry}>Retry</button>
			</div>
		);
	} else if (props.pastDelay) {
		return <div>Loading...</div>;
	} else {
		return null;
	}
}

const Homepage = Loadable({
	loader: () => import('./Home/Home'),
	loading: Loading,
	delay: 30000,
	modules: ['homepage']
});

const Contact = Loadable({
	loader: () => import('./Contact/Contact'),
	loading: Loading,
	delay: 30000,
	modules: ['contact']
});

const TermsCookies = Loadable({
	loader: () => import('./Terms/Cookies/Cookies'),
	loading: Loading,
	delay: 30000,
	modules: ['terms-cookies']
});

const Routing = () => {
	return (
		<Router>
			{!localStorage.getItem('cookieAcknowledgement') ? <CookieBanner /> : null}
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/cookie-policy' component={TermsCookies} />
			</Switch>
		</Router>
	);
};

export default Routing;
