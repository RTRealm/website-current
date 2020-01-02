import styled from 'styled-components';
import * as vars from '../../../assets/styles/_variables';
import * as mixins from '../../../assets/styles/_mixins';

export const GetCurve = styled.section`
	position: relative;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 200px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: 230px;
	}
`;

export const GetCurveContent = styled.div`
	margin: 328px 11% 0 11%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		${mixins.container()};
		text-align: center;
	}
`;

export const GetCurveSplash = styled.span`
	position: absolute;
	top: -240px;
	right: 0px;
	z-index: -2;

	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1536829492/website-v2/Travel/get-curve-splash-1-m.png');
		background-repeat: no-repeat;
		display: block;
		width: 166px;
		height: 400px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1536829492/website-v2/Travel/get-curve-splash-1-m_2x.png',
			'166px',
			'400px'
		)};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		&:after {
			background-image: none;
		}
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		top: 50px;

		&:after {
			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939028/website-v2/Travel/get-curve-splash.jpg');
			width: 299px;
			height: 722px;

			${mixins.image2x(
				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939028/website-v2/Travel/get-curve-splash_2x.jpg',
				'299px',
				'722px'
			)};
		}
	}
`;

export const GetCurveBenefits = styled.ul`
	margin-top: 75px;
	padding-bottom: 15px;
	opacity: 0;
	visibility: hidden;
`;

export const GetCurveBenefit = styled.li`
	margin-bottom: 65px;
`;

export const GetCurveBenefitHeading = styled.div`
	text-align: right;
	display: inline-block;
	width: 113px;
	float: left;
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
	}
	#skillicon {
		-webkit-transition: transform 2s;
		transition: transform 2s;
	}
	#skillicon:hover {
		transform: rotate(360deg);
		color: ${vars.colorHover};
	}
`;

export const GetCurveBenefitContent = styled.div`
	text-align: left;
`;
