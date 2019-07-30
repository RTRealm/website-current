import React, { PureComponent } from 'react';

// page sections
import BodyDispVirt from '../../components/BodyDispVirt/BodyDispVirt';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// components
import Page from '../../components/Page/index';

class Home extends PureComponent {
	render() {
		return (
			<Page>
				<Header />
				<BodyDispVirt />
				<Footer />
			</Page>
		);
	}
}

export default Home;
