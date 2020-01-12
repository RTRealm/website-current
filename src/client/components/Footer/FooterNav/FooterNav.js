import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../../containers/Language';

import * as Styles from './FooterNav.styles';

import LazyLoad from 'react-lazyload';

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
					<Styles.FooterNavContent className='columns is-mobile is-centered is-multiline '>
						{/* <li className='column is-narrow is-12-mobile is-hidden-tablet'>
							<Styles.FooterNavRegion
								className={`dropdown ${this.state.dropDownActive ? 'is-active' : ''}`}
							>
								<div className='dropdown-trigger'>
									<button className='button' aria-haspopup='true' aria-controls='dropdown-menu'>
										<img
											src='https://'
											alt='World icon'
										/>
										<span />
										<span className='icon is-small'>
											<i className='footer-dropdown-arrow' aria-hidden='true' />
										</span>
									</button>
								</div>
							</Styles.FooterNavRegion>

							<noscript>
								<Styles.FooterNavRegionNoJs>
									<li>
										<span>Regions</span>
									</li>
									<li>
										<a href='http://' target='_blank' rel='noopener noreferrer'>
											POL
										</a>
									</li>
									<li>
										<a href='http://' target='_blank' rel='noopener noreferrer'>
											International
										</a>
									</li>
								</Styles.FooterNavRegionNoJs>
							</noscript>
						</li> */}

						{/* <li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								// target='_blank'
								rel='noopener noreferrer'
								className='footer-nav__social-item footer-nav__social-item--instagram'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Instagram'
								data-eventlabel={`Instagram - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://'
										alt='Instagram logo'
									/>
								</LazyLoad>
							</a>
						</li> */}
						{/* <li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								// target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Twitter'
								data-eventlabel={`Twitter - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://'
										alt='Twitter logo'
									/>
								</LazyLoad>
							</a>
						</li> */}
						{/* <li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								// target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Facebook'
								data-eventlabel={`Facebook - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://'
										alt='Facebook logo'
									/>
								</LazyLoad>
							</a>
						</li> */}
						<li className='column is-narrow footer-nav__social'>
							<a
								href='https://www.linkedin.com/company/rtrealm'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to LinkedIn'
								data-eventlabel={`LinkedIn - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578828783/landingpage/linkedin-white.svg'
										alt='LinkedIn logo'
									/>
								</LazyLoad>
							</a>
						</li>
					</Styles.FooterNavContent>
				</Styles.FooterNavWrapper>
			</Styles.FooterNav>
		);
	}
}
