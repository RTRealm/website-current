import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const Control = styled.section`
	width: 100%;
	position: relative;
	margin-top: 320px;
	margin-bottom: 110px;

	@media (${mixins.breakpoint('phone-only')}) {
		.columns {
			margin-bottom: -10px;
		}
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 279px;
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
