import React, { PureComponent } from 'react';

// page sections
import TheCard from '../Home/TheCard/TheCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../Home/AboutUs/AboutUs';
import Convenience from '../Home/Convenience/Convenience';
import Control from '../Home/Control/Control';
import Cashback from '../Home/Cashback/Cashback';
import FixedHeader from '../../components/FixedHeader/FixedHeader';

// components
import Page from '../../components/Page/index';
import FeaturesList from './FeaturesList/FeaturesList';

class Home extends PureComponent {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Page>
				<div className='app'>
					<Header
						textColor={'white'}
						logo={
							'https://res.cloudinary.com/ohcash/image/upload/v1576341382/landingpage/logo_black_line_landing_svg.svg'
						}
						// 'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537358404/website-v2/Icons/curve-logo-black.svg'
						link={'/'}
						page='Home'
						burgerMenuColor={'black'}
					/>
					<main className='main_content'>
						<div className='is-hidden-mobile'>
							<FixedHeader />
						</div>
						<TheCard />
						<div className='fixed-header__trigger-start' />
						<span className='mobile-cta__start' />
						<div className='is-hidden-mobile'>
							<AboutUs />
						</div>
						<div className='is-hidden-tablet'>
							<FeaturesList />
						</div>
						<Convenience />
						<div className='is-hidden-mobile'>
							<Cashback />
						</div>
						<div className='is-hidden-tablet'>
							<Cashback />
						</div>
						<div className='is-hidden-mobile'>
							<Control />
						</div>
						<div className='is-hidden-tablet'>
							<Control />
						</div>
					</main>
					<div className='fixed-header__trigger-end' />
					<Footer page={'Home'} />
				</div>
			</Page>
		);
	}
}

export default Home;
