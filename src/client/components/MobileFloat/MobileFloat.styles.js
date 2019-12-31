import styled from 'styled-components';
import * as mixins from '../../assets/styles/_mixins';

export const MobileCTAFooterWrapper = styled.div`
	padding: 20px 11% 0px 11%;
`;

export const MobileCTAFooterContent = styled.div`
	min-height: 90px;
`;

export const MobileCTAFooter = styled.div`
	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		text-align: center;
	}

	button {
		box-shadow: 0px 28px 28px rgba(0, 0, 0, 0.1);

		@media (${mixins.breakpoint('tablet-portrait-up')}) {
			width: 60%;
		}
	}

	.mobile-cta-footer__dark {
		button {
		}
	}

	p:first-of-type {
		margin-top: 10px;
	}

	p {
		font-weight: normal;
		line-height: 24px;
		font-size: 12px;
		text-align: center;
		padding-bottom: 12px;
	}

	&.mobile-cta-footer__fixed {
		position: fixed;
		bottom: 0px;
		padding: 20px 11% 0 11%;
		width: 100%;
		left: 0px;
		z-index: 2;

		span {
			display: block;
			background: linear-gradient(
				0deg,
				#f6f6f6 44%,
				rgba(246, 246, 246, 0.8) 67%,
				rgba(246, 246, 246, 0) 100%
			);
			height: 190px;
			width: 100vw;
			position: absolute;
			bottom: 0px;
			z-index: 1;
			left: 0px;
		}
	}

	&.mobile-cta-footer__dark.mobile-cta-footer__fixed {
		span {
			background: linear-gradient(0deg, #000 44%, rgba(0, 0, 0, 0.8) 67%, rgba(0, 0, 0, 0) 100%);
		}

		p {
			color: #999;
		}
	}

	.mobile-cta-footer__wrapper {
		position: relative;
		z-index: 2;
	}
`;

export const MobileCTAAdditional = styled.div`
	p {
		font-weight: normal;
		line-height: 24px;
		font-size: 12px;
		text-align: center;
		position: relative;
		top: -12px;
	}

	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		padding-bottom: 50px;
	}
`;
