import styled from 'styled-components';
import * as mixins from '../../assets/styles/_mixins';
import * as vars from '../../assets/styles/_variables';

export const MainBDV = styled.div`
	margin-top: 25px;

	h1 {
		margin: 0 12%;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			margin: 20px 0 0px 0;
			position: relative;
			width: 90%;
		}

		@media (${mixins.breakpoint('desktop-up')}) {
			margin: 0px 0px 0px 0px;
		}
	}

	p {
		margin: 20px 0 0 12%;
		width: 75%;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			width: 85%;
			margin: 0 0 50px 0;
			font-weight: 400;
		}

		@media (${mixins.breakpoint('desktop-up')}) {
			margin: 0 0 20px 0;

			&:last-of-type {
				margin: 0 0 80px 0;
			}
		}
	}
`;

export const MainBDVWrapper = styled.div`
	width: 100%;
	margin: 0 0 0 0;

	@media (${mixins.breakpoint('desktop-up')}) {
		width: 72%;
	}
`;

export const MainBDVButtonWrapper = styled.div`
	max-width: 300px;
	min-width: 300px;

	@media (${mixins.breakpoint('desktop-up')}) {
		max-width: 350px;
		min-width: 350px;
	}
	button {
		font-weight: ${vars.poppinsSemibold};
		line-height: normal;
		font-size: 18px;
		text-align: center;
		color: #ffffff;
		padding: 14px;
		border-radius: 100px;
		box-shadow: 0px 24.6488px 65.7301px rgba(0, 0, 0, 0.35);
		cursor: pointer;
		transition: background-color 0.2s, top 0.2s, box-shadow 0.2s;
		position: relative;
		top: 0px;

		@media (${mixins.breakpoint('desktop-up')}) {
			padding: 18px;
			font-size: 22px;
		}

		&:hover {
			background-color: ${vars.colorHover} !important;
			top: 5px;
			box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.8);
		}
	}
`;

export const MainBDVStores = styled.div`
	text-align: left;
	padding-left: 40px;
	display: flex;
	align-items: center;
	a:first-child {
		margin-right: 40px;
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		img {
			width: 20px;
			min-width: 20px;
			max-width: 20px;
		}
	}

	.main-cta__stores {
		opacity: 0;
		visibility: hidden;
		position: relative;
	}
`;

export const MainBDVPhoneWrapper = styled.div`
	position: relative;
	left: 10px;
`;
