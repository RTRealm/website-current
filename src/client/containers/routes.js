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

const routes = [
	{ path: '/', key: 'home', exact: true, component: Homepage },
	{ path: '/contact', key: 'contact', exact: true, component: Contact },
	{ path: '/cookie-policy', key: 'cookiepolicy', exact: true, component: TermsCookies }
];

function RenderRoutes(routes) {
	const routesDestr = { ...routes };
	return (
		<Switch>
			{routesDestr.routes.map(route => {
				return (
					<Route
						exact={route.exact}
						path={route.path}
						component={route.component}
						key={route.key}
					/>
				);
			})}
		</Switch>
	);
}

const Routing = () => {
	return (
		<Router>
			{!localStorage.getItem('cookieAcknowledgement') ? <CookieBanner /> : null}
			<RenderRoutes routes={routes} />
		</Router>
	);
};

export default Routing;
