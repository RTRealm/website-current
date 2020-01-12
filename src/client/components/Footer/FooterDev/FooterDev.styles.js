import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';
import * as vars from '../../../assets/styles/_variables';

export const Disclaimer = styled.section`
	background-color: #000;
`;

export const DisclaimerContent = styled.div`
	padding: 20px;

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()} padding: 20px 0;
		margin: 0 auto;
		width: 80%;
	}

	p {
		font-weight: $poppins-regular;
		line-height: normal;
		font-size: 14px;
		text-align: center;
		color: #fff;
		margin-bottom: 12px;
	}
`;

// export const DisclaimerAppStores = styled.ul`
// 	margin-top: 10px;
// `;
