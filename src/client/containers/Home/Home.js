import React, { PureComponent } from 'react';

// page sections
import TheCard from '../Home/TheCard/TheCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../Home/AboutUs/AboutUs';
import Convenience from '../Home/Convenience/Convenience';

// components
import Page from '../../components/Page/index';

class Home extends PureComponent {
	render() {
		return (
			<Page>
				<div className='app'>
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
						<div className='is-hidden-mobile' />
						<TheCard />
						<div className='fixed-header__trigger-start' />
						<span className='mobile-cta__start' />
						<div className='is-hidden-mobile'>
							<AboutUs />
						</div>
						<Convenience />
					</main>
					<div className='fixed-header__trigger-end' />
					<Footer />
				</div>
			</Page>
		);
	}
}

export default Home;
