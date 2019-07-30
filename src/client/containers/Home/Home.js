import React, { PureComponent } from 'react';

// page sections
import BodyDispVirt from '../../components/BodyDispVirt/BodyDispVirt';
import Header from '../../components/Header/Header';

// components
import Page from '../../components/Page/index';

class Home extends PureComponent {
	render() {
		return (
			<Page>
				<BodyDispVirt />
			</Page>
		);
	}
}

export default Home;
