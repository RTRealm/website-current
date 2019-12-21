import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const Convenience = styled.section`
	width: 100%;
	position: relative;
	margin-top: 375px;

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: 222px;

		&.convenience--animate {
			.convenience__copy {
				${mixins.textAnimationFadeIn()};
				margin-top: 20px;
				position: relative;
				top: 30px;
			}
		}
	}
`;

export const ConvenienceContent = styled.div`
	margin: 29px 29px 0 41px;

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		margin-top: 415px;

		.column {
			&:last-child {
				margin-left: 70px;
				margin-top: 30px;
			}
		}
	}
`;

export const ConvenienceImage = styled.div`
	display: flex;
	justify-content: center;

	img {
		position: relative;
	}

	.convenience__image-phone {
		max-height: 644px;
		max-width: 369px;
		left: -40px;

		@media (${mixins.breakpoint('desktop-up')}) {
			left: 0px;
		}
	}

	.convenience__image-card {
		display: none;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		.convenience__image-card {
			position: absolute;
			max-height: 397px;
			display: block;
			max-width: 396px;
			left: -140px;
			top: 170px;
		}
	}
`;

export const ConvenienceImageWrapper = styled.div`
	position: relative;
`;

export const ConvenienceSplash = styled.span`
	position: absolute;
	top: -700px;
	left: -140px;
	z-index: -2;

	@media (${mixins.breakpoint('desktop-up')}) {
		left: 0px;
	}

	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537824652/website-v2/Homepage/Light/save-money-splash-2.jpg');
		background-repeat: no-repeat;
		display: block;
		width: 105px;
		height: 922px;
		content: '';
		float: right;

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537824652/website-v2/Homepage/Light/save-money-splash-2_2x.jpg',
			'105px',
			'922px'
		)};
	}
`;

export const ConvenienceSplash2 = styled.span`
	position: absolute;
	top: -330px;
	left: 0px;
	z-index: -3;
	width: 50%;

	&:after {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1567620422/cardWallet/conven-bckr-1x.png');
		background-repeat: no-repeat;
		display: block;
		width: 1000px;
		height: 955px;
		content: '';
		float: right;

		${mixins.image2x(
			'https://res.cloudinary.com/ohcash/image/upload/v1567620423/cardWallet/conven-bckr-2x.png',
			'910px',
			'955px'
		)};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		top: -300px;
		left: -30px;
	}
`;

export const ConvenienceSplash3 = styled.span`
	position: absolute;
	top: -690px;
	right: 0px;
	z-index: -2;
	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537824652/website-v2/Homepage/Light/save-money-splash-3.jpg');
		background-repeat: no-repeat;
		display: block;
		width: 146px;
		height: 886px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537824652/website-v2/Homepage/Light/save-money-splash-3_2x.jpg',
			'146px',
			'886px'
		)};
	}
`;
