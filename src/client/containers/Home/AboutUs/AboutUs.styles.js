import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const AboutUs = styled.section`
	width: 100%;
	position: relative;
	margin-top: 0px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 180px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: 250px;
		min-height: 450px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		&.about-us--animate {
			.about-us__copy {
				${mixins.textAnimationFadeIn()};
				margin-top: 20px;
			}
		}
	}
`;

export const AboutUsContent = styled.div`
	margin: 29px 29px 0 41px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-left: 8%;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		margin-top: 59px;

		h2 {
			width: 80%;
		}
	}
`;

export const AboutUsPhone = styled.span`
	position: absolute;
	top: -175px;
	right: -330px;
	z-index: -1;

	@media (${mixins.breakpoint('desktop-up')}) {
		top: -200px;
		right: 0px;
	}

	&:after {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1578040888/landingpage/ab-us-1x.png');
		background-repeat: no-repeat;
		display: block;
		width: 647px;
		height: 714px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/ohcash/image/upload/v1578040900/landingpage/ab-us-2x.png',
			'647px',
			'714px'
		)};
	}
`;

// export const AboutUsSplash = styled.span`
// 	position: absolute;
// 	top: -430px;
// 	right: 0px;
// 	z-index: -2;
// 	width: 28%;
// 	&:after {
// 		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1567619807/cardWallet/phone-1x.png');
// 		background-repeat: no-repeat;
// 		display: block;
// 		width: 737px;
// 		height: 1127px;
// 		content: '';

// 		${mixins.image2x(
// 			'https://res.cloudinary.com/ohcash/image/upload/v1567619807/cardWallet/phone-2x.png',
// 			'737px',
// 			'1127px'
// 		)};
// 	}

// 	@media (${mixins.breakpoint('tablet-landscape-up')}) {
// 		top: -100px;
// 	}
// `;

// export const AboutUsSplash2 = styled.span`
// 	position: absolute;
// 	top: -430px;
// 	left: -140px;
// 	z-index: -2;

// 	@media (${mixins.breakpoint('desktop-up')}) {
// 		left: 0px;

// 		&:after {
// 			background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1567619431/cardWallet/about-us-side-1x.png');
// 			background-repeat: no-repeat;
// 			display: block;
// 			width: 373px;
// 			height: 1323px;
// 			content: '';
// 			float: right;

// 			${mixins.image2x(
// 				'https://res.cloudinary.com/ohcash/image/upload/v1567619432/cardWallet/about-us-side-2x.png',
// 				'373px',
// 				'1323px'
// 			)};
// 		}
// 	}

// 	@media (${mixins.breakpoint('tablet-landscape-up')}) {
// 		top: -534px;
// 	}
// `;

export const AboutUsContentAppStores = styled.ul``;
