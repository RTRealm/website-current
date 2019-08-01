import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './FooterNav.styles';

import LazyLoad from 'react-lazyload';

export default class FooterNav extends Component {
	state = {
		dropDownActive: false
	};

	render() {
		return (
			<Styles.FooterNav>
				<Styles.FooterNavWrapper className='footer-nav__one'>
					<Styles.FooterNavContent className='columns is-centered is-multiline'>
						<li className='column is-narrow'>
							<Link to='/'>About</Link>
						</li>
						<li className='column is-narrow'>
							<Link to='/'>Contact us</Link>
						</li>
						<li className='column is-narrow'>
							<Link to='/'>We're hiring</Link>
						</li>
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
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548175075/website-v2/Icons/world-icon.svg'
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
										<a href='http://www.curve.app/en-gb/' target='_blank' rel='noopener noreferrer'>
											United Kingdom
										</a>
									</li>
									<li>
										<a href='http://www.curve.app/en/' target='_blank' rel='noopener noreferrer'>
											International
										</a>
									</li>
								</Styles.FooterNavRegionNoJs>
							</noscript>
						</li> */}

						<li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='footer-nav__social-item footer-nav__social-item--instagram'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Instagram'
								data-eventlabel={`Instagram - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548164910/website-v2/Icons/instagram-white.svg'
										alt='Instagram logo'
									/>
								</LazyLoad>
							</a>
						</li>
						<li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Twitter'
								data-eventlabel={`Twitter - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548164910/website-v2/Icons/twitter-white.svg'
										alt='Twitter logo'
									/>
								</LazyLoad>
							</a>
						</li>
						<li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Facebook'
								data-eventlabel={`Facebook - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548164910/website-v2/Icons/facebook-white.svg'
										alt='Facebook logo'
									/>
								</LazyLoad>
							</a>
						</li>
						<li className='column is-narrow footer-nav__social'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to LinkedIn'
								data-eventlabel={`LinkedIn - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548164910/website-v2/Icons/linkedin-white.svg'
										alt='LinkedIn logo'
									/>
								</LazyLoad>
							</a>
						</li>
						{/* <li className='column is-narrow footer-nav__social'>
							<a
								href='https://dribbble.com/imaginecurve'
								target='_blank'
								rel='noopener noreferrer'
								data-eventcategory='SocialLinks'
								data-eventaction='Go to Dribbble'
								data-eventlabel={`Dribbble - ${this.props.page} footer`}
							>
								<LazyLoad once={true} height={24} offset={100}>
									<img
										src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1548164910/website-v2/Icons/dribbble-white.svg'
										alt='Dribbble logo'
									/>
								</LazyLoad>
							</a>
						</li> */}
					</Styles.FooterNavContent>
				</Styles.FooterNavWrapper>
			</Styles.FooterNav>
		);
	}
}
