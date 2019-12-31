import styled from 'styled-components';
import * as mixins from '../../assets/styles/_mixins';

export const CookieBannerWrapper = styled.div`
	width: 100%;
	background: #fff;
	border-bottom: 1px solid #e6e6e6;
	box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
	z-index: 5;
`;

export const CookieBanner = styled.div`
	padding: 10px 0;
	margin: 0 5% 0 5% !important;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		padding: 20px 0;
		${mixins.container()};
		margin: 0 auto !important;
	}
	button {
		text-align: right;
		padding: 0px;
		border: none;
		background: #fff;
		outline: none;
		cursor: pointer;
		img {
			width: 13px;
		}
	}

	p {
		font-weight: normal;
		line-height: 16px;
		font-size: 12px;
		color: #787878;
		padding: 0px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			line-height: 26px;
			font-size: 18px;
		}
	}

	a {
		text-decoration-line: underline;
		color: #4ecfff;
	}
`;
