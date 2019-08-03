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
		margin-top: 280px;
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
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537821852/website-v2/Homepage/Light/welcome-phone.png');
		background-repeat: no-repeat;
		display: block;
		width: 647px;
		height: 714px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537821852/website-v2/Homepage/Light/welcome-phone_2x.png',
			'647px',
			'714px'
		)};
	}
`;

export const AboutUsSplash = styled.span`
	position: absolute;
	top: -430px;
	right: 0px;
	z-index: -2;
	width: 28%;
	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/c_scale,f_auto,q_auto,w_0.5/v1548246933/website-v2/Homepage/Light/welcome-splash-v2');
		background-repeat: no-repeat;
		display: block;
		width: 737px;
		height: 1127px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/f_auto,q_auto/v1548246933/website-v2/Homepage/Light/welcome-splash-v2',
			'737px',
			'1127px'
		)};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		top: -100px;
	}
`;

export const AboutUsSplash2 = styled.span`
	position: absolute;
	top: -430px;
	left: -140px;
	z-index: -2;

	@media (${mixins.breakpoint('desktop-up')}) {
		left: 0px;

		&:after {
			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1539382060/website-v2/Homepage/Light/welcome-splash-1.jpg');
			background-repeat: no-repeat;
			display: block;
			width: 373px;
			height: 1323px;
			content: '';
			float: right;

			${mixins.image2x(
				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539382060/website-v2/Homepage/Light/welcome-splash-1_2x.jpg',
				'373px',
				'1323px'
			)};
		}
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		top: -534px;
	}
`;

export const AboutUsContentAppStores = styled.ul``;