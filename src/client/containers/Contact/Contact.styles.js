import styled from 'styled-components';
import * as vars from '../../assets/styles/_variables';
import * as mixins from '../../assets/styles/_mixins';

export const HeadingGroup = styled.div``;
export const HeadingH2 = styled.h2`
	font-size: 2.5em;
	text-align: center;
	margin-bottom: 24px;
	line-height: 1em;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		font-size: 70px;
	}
`;

export const HeadingSubtitle = styled.p`
	font-size: 1.5em;
	line-height: 1.5em;
	padding: 0px 12px;
	margin-bottom: 50px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		font-size: 35px;
		line-height: 45px;
		padding: 0px;
		margin-bottom: 0;
	}
`;

export const ContactSection = styled.section`
	width: 100%;
	max-width: 100%;
	margin-top: 80px;
	text-align: center;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 180px;
	}
`;

export const Info = styled.div`
	margin-bottom: 50px;
	margin-top: 50px;

	.columns {
		display: flex;
		justify-content: center;
	}
`;

export const ContactH3 = styled.h3`
	font-size: 20px;
	text-align: center;
	margin-bottom: 12px;
	color: #000;
	margin-top: 24px;
	visibility: hidden;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		font-size: 30px;
	}
`;

export const InfoHr = styled.hr`
	width: 50%;
	margin: 30px auto 10px auto;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin: 50px auto;
	}
`;

export const InfoHr1 = styled.hr`
	width: 50%;
	margin: 30px auto 10px auto;
	opacity: 0;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin: 50px auto;
	}
`;

export const ContactSupport = styled.ul`
	width: 90%;
	margin: 0 auto;
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		${mixins.container()};
		margin-top: 80px;
		padding-bottom: 29px;
	}
`;
export const ContactSupportItem = styled.li`
	#skillicon {
		color: #ff7f50;
		transition: color 0.2s;
		font-size: 1.5em;
		font-weight: ${vars.poppinsMedium};
		&:hover {
			color: #ff6347;
		}
	}

	span {
		display: block;
	}
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		padding: 10px 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 3px solid rgba(196, 196, 196, 0.3);

		&:last-child {
			border: none;
		}
	}
`;

export const ContactSocial = styled.div`
	background-image: url('https://res.cloudinary.com/ohcash/image/upload/v1578574202/landingpage/Screenshot_2020-01-02_at_23.31.01.png');
	opacity: 0.5;
	margin: 50px auto 0 auto;
	width: 90%;
	height: 10%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 50px;
	}
	ul {
		justify-content: center;
		margin-top: 40px;
	}

	img {
		max-height: 32px;
		height: 100%;
		width: 32px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			max-height: 25px;
			width: 25px;
		}
	}
`;

export const ContactSocialLinks = styled.a`
	color: ${vars.colorAccent};
	transition: color 0.3s;
	text-align: center;
	display: block;
	padding: 0;
	visibility: hidden;

	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		padding: 0 25px;
	}

	&:hover {
		color: ${vars.colorHover};
	}
`;
export const ContactAddress = styled.div`
	padding-bottom: 100px;
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		${mixins.container()};
	}
`;
export const ContactAddressList = styled.ul``;
export const ContactAddressItem = styled.li`
	&:first-child {
		text-align: right;
	}

	&:last-child {
		text-align: left;
	}

	p {
		color: #6c6c6c;
	}
	em {
		font-weight: ${vars.poppinsMedium};
		font-style: normal;
	}
`;
export const ContactSecurity = styled.div`
	width: 100%;
	margin: 30px 0 0 0;
	padding: 0 12px;
	a {
		color: ${vars.colorAccent};
		-webkit-transition: color 0.2s;
		transition: color 0.2s;
		font-weight: 500;
		&:hover {
			color: ${vars.colorHover};
		}
	}
	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		width: 75%;
		margin: 30px auto 0 auto;
	}
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 60%;
		margin: 60px auto 0 auto;
	}
`;
