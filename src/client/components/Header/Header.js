import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import * as Styles from './Header.styles';

export default class Header extends Component {
	static defaultProps = {
		uniqueLogo: false
	};

	state = {
		hover: false,
		mobileOpen: false,
		columnWidth: {
			desktop: 9,
			tablet: 9
		}
	};

	gsap = null;

	logos = {
		white:
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537358405/website-v2/Icons/curve-logo-white.svg'
	};

	componentDidMount() {
		this.gsap = require('gsap');
	}

	onMouseEnterHandler() {
		this.setState({ hover: true });
	}

	onMouseLeaveHandler() {
		this.setState({ hover: false });
	}

	onMenuClickHandler() {
		const mobileMenuState = this.state.mobileOpen ? false : true;

		this.setState({ mobileOpen: mobileMenuState });

		if (!this.state.mobileOpen) {
			this.gsap.TweenLite.to('.header__mobile-nav-list', 0.5, {
				autoAlpha: 1,
				display: 'block',
				ease: this.gsap.Power1.easeOut
			});
		} else {
			this.gsap.TweenLite.to('.header__mobile-nav-list', 0.5, {
				autoAlpha: 0,
				display: 'none',
				ease: this.gsap.Power1.easeOut
			});
		}
	}

	navLinks() {
		return (
			<ul className='columns'>
				<li className='column is-narrow is-6'>
					<Link to={this.props.navLink}>{this.props.navName}</Link>
				</li>
				<li className='column is-narrow is-6'>
					<LanguageSelector />
					{/* <a href='mailto:contact@rtrealm.com'>PL/GB</a> */}
				</li>
			</ul>
		);
	}

	render() {
		return (
			<Styles.Header
				className={
					' ' + (this.props.textColor === 'black' ? 'header--dark-theme' : 'header--light-theme')
				}
			>
				<Styles.HeaderMobile
					className={
						'is-hidden-tablet columns is-mobile ' +
						(this.state.mobileOpen ? 'header__mobile--menu-open' : '')
					}
				>
					<div className='column is-5'>
						<Link to={this.props.link}>
							<img
								src={
									this.state.mobileOpen && !this.props.uniqueLogo
										? this.logos.white
										: this.props.logo
								}
								alt='Virtu Logo'
							/>
						</Link>
					</div>
					{/* <Styles.HeaderMobileButton className='column is-5-mobile header__mobile-button'>
						<Button text={'About'} />
					</Styles.HeaderMobileButton> */}
					<Styles.HeaderMobileNav
						className={
							'column is-8 header__mobile-nav ' +
							(this.props.burgerMenuColor === 'black' ? 'header__mobile-nav--black' : '')
						}
					>
						{/* <button
							className={
								'header__mobile-menu-button ' +
								(this.state.mobileOpen ? 'header__mobile-menu-button--close' : '')
							}
							type='button'
							onClick={this.onMenuClickHandler.bind(this)}
						/> */}
						<LanguageSelector />
					</Styles.HeaderMobileNav>
				</Styles.HeaderMobile>
				<div className='columns is-hidden-mobile'>
					<div
						className={`column is-${this.state.columnWidth.desktop}-desktop is-${this.state.columnWidth.tablet}-tablet`}
					>
						<Link to={this.props.link}>
							<img src={this.props.logo} alt='Virtu Logo' />
						</Link>
					</div>
					<Styles.HeaderNav
						className={`column is-${12 - this.state.columnWidth.desktop}-desktop is-${12 -
							this.state.columnWidth.tablet}-tablet`}
					>
						{this.navLinks()}
					</Styles.HeaderNav>
				</div>
				<Styles.HeadeMobileNavList className='is-hidden-tablet header__mobile-nav-list'>
					<Navigation />
				</Styles.HeadeMobileNavList>
			</Styles.Header>
		);
	}
}
