import React, { PureComponent } from 'react';

// page sections
import TheCard from '../Home/TheCard/TheCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// components
import Page from '../../components/Page/index';
import FixedHeader from '../../components/FixedHeader/FixedHeader';

class Home extends PureComponent {
	render() {
		return (
			<Page>
				<Header
					textColor={'white'}
					logo={
						'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537358404/website-v2/Icons/curve-logo-black.svg'
					}
					link={'/'}
					page='Home'
					burgerMenuColor={'black'}
				/>
				<main className='main_content'>
					<div className='is-hidden-mobile'>
						<FixedHeader />
					</div>
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
