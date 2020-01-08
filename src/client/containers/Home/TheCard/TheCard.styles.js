import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const YourCard = styled.section`
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 95%;
		margin: 5% auto 0 auto;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		margin-top: 120px;
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		p {
			line-height: 1.3em;
		}
		h1 {
			line-height: 3rem;
			margin-bottom: 36px;
		}
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		h1 {
			line-height: 4rem;
			margin-bottom: 36px;
		}
	}
`;

export const YourCardTag = styled.div`
	padding-top: 0px;

	@media (${mixins.breakpoint('desktop-up')}) {
		position: relative;
		left: 66px;
		padding: 0px;
		z-index: 1;
	}
`;

export const YourCardMainImage = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	padding-bottom: 0px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: -30px;
	}

	.img {
		display: block;
		position: relative;
		top: 0px;
		left: 0px;
		max-width: 255px;
		max-height: 394px;
		z-index: -1;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			max-width: 558px;
			max-height: 506px;
		}

		@media (${mixins.breakpoint('desktop-up')}) {
			max-width: initial;
			min-width: 410px;
			max-height: 655px;
			width: 410px;
			top: -33px;
			left: -22px;
			z-index: 1;
		}
	}
`;

export const YourCardPR = styled.ul`
	width: 90%;
	margin-left: 12%;
	position: relative;
	margin-top: 50px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 80%;
		margin-left: 8%;
		margin-top: 0;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		width: 100%;
		padding-left: 20px;
		margin-left: 0;
	}

	li {
		padding: 0 12px 0 0;
		width: 45%;
		margin-bottom: 20px;

		@media (${mixins.breakpoint('tablet-portrait-up')}) {
			width: initial;
			padding-right: 35px;
		}

		img {
			opacity: 0.5;
			width: 50px;

			@media (${mixins.breakpoint('tablet-portrait-up')}) {
				width: 80%;
			}

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				padding-top: 10px;
			}
		}
	}

	.intro__trustpilot {
		img {
			width: 150px;
			padding-top: 0;
			opacity: 1;
			position: relative;
			z-index: -1;

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				width: 230px;
			}
		}
	}
`;

export const YourCardPRWrapper = styled.div`
	display: block;
	padding-bottom: 40px;
	margin-top: 70px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		padding-bottom: 0px;
	}
`;
