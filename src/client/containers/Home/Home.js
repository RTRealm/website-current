import React, { Component } from 'react';

import BodyDispVirt from '../../components/BodyDispVirt';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
	return (
		<div>
			<Header />
			<BodyDispVirt />
			<BodyDispVirt />
			<Footer />
		</div>
	);
}

export default Home;
