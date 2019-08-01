import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const Control = styled.section`
	width: 100%;
	position: relative;
	margin-top: 420px;
	margin-bottom: 110px;

	@media (${mixins.breakpoint('phone-only')}) {
		.columns {
			margin-bottom: -10px;
		}
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 479px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		&.control--animate {
			.control__copy {
				${mixins.textAnimationFadeIn()};
				margin-top: 20px;
			}
		}
	}
`;

export const ControlContent = styled.div`
	margin: 29px 29px 0 29px;
	text-align: center;
	position: relative;

	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		margin: 0 13%;
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		${mixins.container()};
		text-align: left;
		margin-left: 8%;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin: 0 auto;
	}

	p {
		margin-bottom: 20px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			margin-bottom: 0px;
		}
	}
`;

export const ControlCopy = styled.div`
	padding-top: 125px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		padding-top: 0px;
	}

	p {
		margin-bottom: 24px;
	}
`;

export const ControlImage = styled.div`
	img {
		position: absolute;
		display: block;
		width: 489px;
		height: 531px;
		max-width: 489px;
		max-height: 531px;
		z-index: -1;
		top: -236px;
		left: -200px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			position: relative;
			max-width: 633px;
			max-height: 642px;
			width: 633px;
			height: 642px;
			top: -125px;
			left: -190px;
		}

		@media (${mixins.breakpoint('desktop-up')}) {
			top: -110px;
			left: -125px;
		}
	}
`;

export const ControlSplash = styled.span`
	position: absolute;
	top: -326px;
	right: 0px;
	z-index: -2;
	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/c_scale,f_auto,q_auto,w_0.5/v1539945354/website-v2/Homepage/Light/time-travel-splash-m_2x');
		background-repeat: no-repeat;
		display: block;
		width: 770px;
		height: 448px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/f_auto,q_auto/v1539945354/website-v2/Homepage/Light/time-travel-splash-m_2x',
			'770px',
			'448px'
		)};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		top: -235px;
		right: -165px;
		width: 80%;

		&:after {
			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/c_scale,f_auto,q_auto,w_0.5/v1539379427/website-v2/Homepage/Light/time-travel-splash-1_2x');
			width: 1540px;
			height: 604px;

			${mixins.image2x(
				'https://res.cloudinary.com/dzatxn6bx/image/upload/f_auto,q_auto/v1539379427/website-v2/Homepage/Light/time-travel-splash-1_2x',
				'1540px',
				'604px'
			)};
		}
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		right: -305px;
	}
`;

export const ControlSplash2 = styled.span`
	position: absolute;
	top: -430px;
	left: 0px;
	z-index: -2;

	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/c_scale,f_auto,q_auto,w_0.5/v1539382603/website-v2/Homepage/Light/time-travel-splash-2_2x');
		background-repeat: no-repeat;
		display: block;
		width: 574px;
		height: 722px;
		content: '';
		float: right;

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/f_auto,q_auto/v1539382603/website-v2/Homepage/Light/time-travel-splash-2_2x',
			'574px',
			'722px'
		)};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		top: 100px;
		width: 39%;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		top: 200px;
		width: auto;
	}
`;
