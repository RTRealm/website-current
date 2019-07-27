import React, { Component } from 'react';

import './App.css';
import BodyDispVirt from './client/components/BodyDispVirt';
import Header from '../src/client/components/Header';
import Footer from '../src/client/components/Footer';

function App() {
	return (
		<div>
			<Header />
			<BodyDispVirt />
			<BodyDispVirt />
			<Footer />
		</div>
	);
}

export default App;
