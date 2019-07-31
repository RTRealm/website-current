import React, { PureComponent } from 'react';

// page sections
import TheCard from '../Home/TheCard/TheCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// components
import Page from '../../components/Page/index';

class Home extends PureComponent {
	render() {
		return (
			<Page>
				<Header />
				<main className='main_content'>
					<TheCard />
					<TheCard />
					<TheCard />
					<Footer />
				</main>
			</Page>
		);
	}
}

export default Home;
