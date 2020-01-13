import styled from 'styled-components';
import * as vars from '../../../assets/styles/_variables';
import * as mixins from '../../../assets/styles/_mixins';

export const GetService = styled.section`
	position: relative;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 200px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: 230px;
	}
`;

export const GetServiceContent = styled.div`
	margin: 328px 11% 0 11%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		${mixins.container()};
		text-align: center;
	}
`;

export const GetServiceBenefits = styled.ul`
	margin-top: 75px;
	padding-bottom: 15px;
	opacity: 0;
	visibility: hidden;
`;

export const GetServiceBenefit = styled.li`
	margin-bottom: 65px;
`;

export const GetServiceBenefitHeading = styled.div`
	text-align: right;
	display: inline-block;
	width: 113px;
	float: right;
	padding: 10px 10px 0 0;
	position: relative;
	border-right: 1px solid ${vars.colorAccent};

	h5 {
		font-size: 22px;
		color: ${vars.colorAccent};
		font-weight: ${vars.poppinsSemibold};
	}

	h4 {
		line-height: 36px;
		font-size: 20px;
		font-weight: ${vars.poppinsLight};
		color: ${vars.colorAccent};

		text-align: right;
		em {
			font-size: 60px;
			font-weight: ${vars.poppinsSemibold};
			font-style: normal;
			display: block;
			padding-right: 20px;
			span {
				font-size: 32px;
				font-weight: ${vars.poppinsMedium};
			}
		}
		img {
			margin-right: 15px;
		}
	}
`;

export const GetServiceBenefitContent = styled.div`
	text-align: left;
	#stronger {
		font-weight: ${vars.poppinsSemibold};
	}
`;
