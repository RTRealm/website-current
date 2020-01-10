import styled from 'styled-components';
import * as vars from '../../../assets/styles/_variables';

export const FeaturesList = styled.section`
	position: relative;
`;

export const FeaturesListContent = styled.ul`
	margin: 50px 0 50px 13%;
	width: 75%;
`;

export const FeaturesListItem = styled.li`
	padding-bottom: 40px;
	margin-bottom: 40px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.15);

	span {
		background-repeat: no-repeat;
		display: block;
		margin-bottom: 32px;
		position: relative;
		z-index: -1;
	}

	h3 {
		font-weight: ${vars.poppinsSemibold};
		line-height: 1.2em;
		font-size: 1.3em;
		letter-spacing: -0.02em;
		color: #000;
		opacity: 0.9;
		text-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
		margin-bottom: 18px;
	}

	p {
		text-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
	}

	&.features-list__item--sync span {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_ff7f50.svg');
		width: 91px;
		height: 38px;
	}

	&.features-list__item--insights span {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1578573887/landingpage/infinity_pink.svg');
		width: 91px;
		height: 38px;
	}

	&.features-list__item--outsource span {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1578573887/landingpage/infinity_blue.svg');
		width: 91px;
		height: 38px;
	}

	&.features-list__item--abroad span {
		background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1577882084/landingpage/infinity_green.svg');
		width: 91px;
		height: 38px;
	}
`;
