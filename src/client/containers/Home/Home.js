import React, { PureComponent } from 'react';

// page sections
import TheMain from './TheMain/TheMain';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../Home/AboutUs/AboutUs';
import Control from '../Home/Control/Control';
import Cashback from '../Home/Cashback/Cashback';
import FixedHeader from '../../components/FixedHeader/FixedHeader';
import Fintech from './Fintech/Fintech';
import GetService from '../Home/GetService/GetService';

// components
import Page from '../../components/Page/index';
import FeaturesList from './FeaturesList/FeaturesList';
import MobileFloat from '../../components/MobileFloat/MobileFloat';
import { Text } from '../Language';

class Home extends PureComponent {
	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	textBody = text => {
		return <Text tid={text} />;
	};

	render() {
		return (
			<Page>
				<div className='app'>
					<Header
						textColor={'white'}
						link={'/'}
						logo={
							'https://landingpagereactreact-local.s3.eu-central-1.amazonaws.com/logo_black_line_landing_svg.svg'
						}
						// logo={
						// 	'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537358404/website-v2/Icons/curve-logo-black.svg'
						// }
						navLink={'/contact'}
						navName={this.textBody('contactHeader')}
						page='Contact'
						burgerMenuColor={'black'}
					/>
					<main className='main_content'>
						<div className='is-hidden-mobile'>
							<FixedHeader />
						</div>
						<TheMain />
						<div className='fixed-header__trigger-start' />
						<span className='mobile-cta__start' />
						<div className='is-hidden-mobile'>
							<GetService />
						</div>
						<div className='is-hidden-tablet'>
							<FeaturesList />
						</div>
						<AboutUs />
						<Fintech />
						<div className='is-hidden-mobile'>
							<Control />
						</div>
						<div className='is-hidden-tablet'>
							<Control />
						</div>
						<div className='is-hidden-mobile'>
							<Cashback />
						</div>
						<div className='is-hidden-tablet'>
							<Cashback />
						</div>
					</main>
					<MobileFloat />
					<div className='fixed-header__trigger-end' />
					<Footer page={'Home'} />
				</div>
			</Page>
		);
	}
}

export default Home;
