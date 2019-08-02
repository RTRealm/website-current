import React, { Component } from 'react';
import * as Styles from './FixedHeader.styles';

import Button from '../Button/Button';

export default class FixedHeader extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	static defaultProps = {
		name: 'Contact us!'
	};

	image = null;
	controller = null;
	scene1 = null;
	scene2 = null;

	componentDidMount() {
		const gsap = require('gsap');
		const scrollMagic = require('scrollmagic');
		// require('animation.gsap');

		this.controller = new scrollMagic.Controller();

		const tweenHide = () => {
			gsap.TweenLite.to(this.image, 0.3, { autoAlpha: 0, display: 'none' });
		};

		const tweenShow = () => {
			gsap.TweenLite.to(this.image, 0.3, { autoAlpha: 1, display: 'block' });
		};

		this.scene1 = new scrollMagic.Scene({
			triggerElement: '.fixed-header__trigger-start',
			duration: 20
		})
			.addTo(this.controller)
			.on('enter leave', e => {
				if (e.scrollDirection === 'FORWARD') {
					tweenShow();
				} else {
					tweenHide();
				}
			});

		this.scene2 = new scrollMagic.Scene({
			triggerElement: '.fixed-header__trigger-end',
			duration: 20
		})
			.addTo(this.controller)
			.on('enter leave', e => {
				if (e.scrollDirection === 'FORWARD') {
					tweenHide();
				} else {
					tweenShow();
				}
			});
	}

	componentWillUnmount() {
		this.controller.destroy();
		this.scene1.destroy();
	}

	render() {
		return (
			<div>
				<Styles.FixedHeader>
					<Styles.FixedHeaderButtonWrapper
						className='fixed-header__button-wrapper'
						ref={image => {
							this.image = image;
						}}
					>
						<Button className={'fixed-header__button'} text={this.props.name} />
					</Styles.FixedHeaderButtonWrapper>
				</Styles.FixedHeader>
			</div>
		);
	}
}
