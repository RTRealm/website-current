import styled from 'styled-components';
import * as vars from '../../../assets/styles/_variables';
import * as mixins from '../../../assets/styles/_mixins';

export const Intro = styled.section`
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 95%;
		margin: 5% auto 0 auto;

		&:before {
			/* background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1539904639/website-v2/Travel/beach-desk.jpg'); */

			background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1578041521/landingpage/main-back-desk.png');

			/* background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1576931308/landingpage/christian-perner-UKLIuV8rAks-unsplash.png'); */

			background-repeat: no-repeat;
			background-size: cover;
			width: 100vw;
			height: 1226px;
			display: block;
			content: '';
			position: absolute;
			top: -250px;
			left: 0px;
			z-index: -2;
			opacity: 0.2;

			@media (${mixins.breakpoint('desktop-up')}) {
				top: 0px;
			}
		}
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		margin-top: 105px;
	}
`;

export const IntroImage = styled.div`
	width: 100%;
	position: absolute;
	top: -130px;
	left: 0px;
	z-index: -1;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		position: relative;
		overflow: visible;
	}

	&:before {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1576925844/landingpage/Intro1-large.png');
		background-repeat: no-repeat;
		width: 769px;
		height: 658px;
		display: block;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/ohcash/image/upload/v1576925844/landingpage/Intro1-large.png',
			'769px',
			'658px'
		)};

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			background-image: none;
		}
	}

	img {
		position: absolute;
		margin-top: 28px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			top: 100px;
			left: 45px;
			width: 80%;
		}

		@media (${mixins.breakpoint('desktop-up')}) {
			left: -60px;
			width: auto;
			top: 60px;
		}
	}
`;

export const IntroContent = styled.div`
	margin: 273px 10% 0 10%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin: 0;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		position: relative;
		left: 66px;
	}

	div {
		h1 {
			color: #000;
			margin: auto auto 36px auto;
			text-align: center;

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				margin: 20px 0 20px 0;
				position: relative;
				text-align: left;
			}

			@media (${mixins.breakpoint('desktop-up')}) {
				margin: 0px 0 28px 0;
			}
		}
		p {
			color: #000;
			text-align: center;
			margin: 0px;
			width: 100%;

			&:last-of-type {
				margin-bottom: 60px;
			}

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				margin: 0 0 20px 0;
				text-align: left;
			}

			@media (${mixins.breakpoint('desktop-up')}) {
				width: auto;
			}
		}

		a {
			color: #000;
			transition: color 0.3s;
			text-decoration: underline;
			&:hover {
				color: ${vars.colorHover};
			}
		}
	}
`;
