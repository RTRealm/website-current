import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

function Loading(props) {
	if (props.error) {
		return (
			<div>
				Error! <button onClick={props.retry}>Retry</button>
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
	loading: () => null,
	modules: ['contact']
});

const Routing = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</HashRouter>
	);
};

// const Routes = withRouter(Routing);
export default Routing;
