import styled from 'styled-components';
import * as vars from '../../../assets/styles/_variables';
import * as mixins from '../../../assets/styles/_mixins';

export const Africa = styled.section`
	position: relative;
	margin-top: 140px;
	margin-bottom: 80px;
	z-index: 0;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 140px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: 140px;
	}
`;

export const AfricaContent = styled.div`
	margin: 0px 11% 0 11%;
	text-align: center;

	#logo_amh {
		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			position: relative;
			left: 50px;
			top: 30px !important;
		}
	}

	a {
		color: ${vars.colorAccent};
		font-weight: ${vars.poppinsMedium};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		text-align: left;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
	}
	h2 {
		margin-bottom: 20px;
	}

	p {
		&:last-child {
			margin-bottom: 48px;
		}
	}

	img {
		@media (${mixins.breakpoint('desktop-up')}) {
			position: relative;
			left: 50px;
			top: -10px;
		}
	}
`;

export const AfricaCopy = styled.div`
	margin-top: 50px;
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 80px;
	}

	img {
		left: 0px;
	}
`;

export const AfricaFeatures = styled.ul`
	width: 75%;
	margin: 0 auto;
	top: -39px;
	position: relative;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 55%;
		top: -29px;
		margin: 0px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		width: 35%;
	}
`;

export const AfricaFeaturesItem = styled.div`
	@media (${mixins.breakpoint('desktop-up')}) {
		top: 20px;
		opacity: 0;
		visibility: hidden;
		position: relative;
	}
`;