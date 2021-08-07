import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../../containers/Language';

import * as Styles from './FooterNav.styles';

export default class FooterNav extends Component {
	state = {
		dropDownActive: false
	};

	textBody = text => {
		return <Text tid={text} />;
	};

	render() {
		return (
			<Styles.FooterNav>
				<Styles.FooterNavWrapper className='footer-nav__one'>
					<Styles.FooterNavContent className='columns is-centered is-multiline'>
						{this.props.page === 'Home' ? (
							<li className='column is-narrow'>
								<Link to='/contact'>{this.textBody('contactHeader')}</Link>
							</li>
						) : (
							<li className='column is-narrow'>
								<Link to='/'>{this.textBody('homeHeader')}</Link>
							</li>
						)}
						{/* <li className='column is-narrow'>
							<Link to='/'>We're hiring</Link>
						</li> */}
						</Styles.FooterNavContent>
					</Styles.FooterNavWrapper>
				<Styles.FooterNavWrapper className='footer-nav__two is-hidden-desktop' />
				<Styles.FooterNavWrapper className='footer-nav__three'>
					<Styles.FooterNavContentSocial className='columns is-mobile is-centered is-multiline '>
						<li className='column is-narrow footer-nav__social'>
							<a
								href='https://www.facebook.com/rtrealm'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Facebook'
								data-eventlabel={`Facebook - ${this.props.page} footer`}
							>
								<img
									src='https://res.cloudinary.com/ohcash/image/upload/v1578827714/landingpage/facebook-white.svg'
									alt='Facebook logo'
								/>
							</a>
						</li>
						<li className='column is-narrow footer-nav__social'>
							<a
								href='https://www.linkedin.com/company/rtrealm'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to LinkedIn'
								data-eventlabel={`LinkedIn - ${this.props.page} footer`}
							>
								<img
									src='https://res.cloudinary.com/ohcash/image/upload/v1578828783/landingpage/linkedin-white.svg'
									alt='LinkedIn logo'
								/>
							</a>
						</li>
						<li className='column is-narrow footer-nav__social'>
							<a
								href='https://www.instagram.com/rt.realm'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Instagram'
								data-eventlabel={`Instagram - ${this.props.page} footer`}
							>
								<img
									src='https://res.cloudinary.com/ohcash/image/upload/v1578827734/landingpage/instagram-white.svg'
									alt='Instagram logo'
								/>
							</a>
						</li>
					</Styles.FooterNavContentSocial>
				</Styles.FooterNavWrapper>
			</Styles.FooterNav>
		);
	}
}
