import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const Credentials = styled.section`
	position: relative;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 275px;
		margin-bottom: 340px;
	}
`;

export const CredentialsContent = styled.div`
	margin: 100px 11% 0 11%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin: 350px 11% 0 11%;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		position: relative;
	}
`;

export const CredentialsCopy = styled.div`
	text-align: center;
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 49%;
		margin-left: 50px;
		text-align: left;
	}
`;

export const CredentialsBrands = styled.div`
	margin: 10px auto 0 auto;
	position: relative;
	width: 70%;

	.credentials-techstack__mobile-p {
		margin-top: 20px;
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 100%;
		margin: 0 auto 0 auto;
	}

	p {
		text-align: center;
		margin-top: 125px;
	}
`;

export const CredentialsBrandsList = styled.ul`
	display: flex;
	text-align: center;
	align-items: center;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-left: -10%;
	}
`;

export const CredentialsBrandsItem = styled.div`
	position: relative;
	height: 71px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-bottom: 30px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		top: 20px;
		opacity: 0;
		visibility: hidden;
		position: relative;
	}

	span {
		display: flex;
		display: -webkit-flex;
		width: 100%;
		height: 100%;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: baseline;
		align-items: baseline;
		position: relative;

		&:after {
			content: '';
			top: 0px;
			position: absolute;
			border-radius: 18px;
			box-shadow: 0px 27.7581px 27.7581px rgba(0, 0, 0, 0.1);
			width: 54.1px;
			height: 54.33px;
			margin-top: 45px;

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				left: 5px;
			}

			@media (${mixins.breakpoint('desktop-up')}) {
				margin-top: 35px;
				width: 74px;
				height: 74px;
			}
		}
	}
`;

export const CredentialsBrandsImage = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	width: 100%;
	align-items: center;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		img {
			height: 70%;
			max-width: 44px;
		}
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		img {
			height: 90%;
			max-width: 62px;
		}
	}
`;

export const CredentialsTechList = styled.ul`
	display: none;
	text-align: center;
	align-items: center;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-left: -10%;
	}
`;

export const CredentialsTechItem = styled.div`
	position: relative;
	height: 71px;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-bottom: 30px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		top: 20px;
		opacity: 0;
		display: none;
		position: relative;
	}

	span {
		display: flex;
		display: -webkit-flex;
		width: 100%;
		height: 100%;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: baseline;
		align-items: baseline;
		position: relative;

		&:after {
			content: '';
			top: 0px;
			position: absolute;
			border-radius: 18px;
			box-shadow: 0px 27.7581px 27.7581px rgba(0, 0, 0, 0.1);
			width: 54.1px;
			height: 54.33px;
			margin-top: 45px;

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				left: 5px;
			}

			@media (${mixins.breakpoint('desktop-up')}) {
				margin-top: 35px;
				width: 74px;
				height: 74px;
			}
		}
	}
`;

export const CredentialsImage = styled.div`
 @media (${mixins.breakpoint('tablet-landscape-up')}) {
    position: absolute;
    top: -40%;
    left: 40%;

    span {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: -3;

    @media (${mixins.breakpoint('desktop-up')}) {
      top: 220px;
    }

    &:after {
      /* background-image: url("https://"); */
      background-repeat: no-repeat;
      display: block;
      width: 2268px;
      height: 1185px;
      /* content: ""; */
    }
  }

  img {
      width: 100%;
      @media (${mixins.breakpoint('desktop-up')}) {
        position: relative;
        top: 120px;
      }
    }

	@media (${mixins.breakpoint('desktop-up')}) {
    left: inherit;
    top: -310px;
    right: -210px;
  }

  &:before {
    /* content: "";
    background-image: url("https://"); */
    width: 300px;
    height: 300px;
    display: block;
    position: absolute;
    top: 110px;
    z-index: -3;
    left: 100px;

    /* ${mixins.image2x('https://', '300px', '300px')}; */

    @media (${mixins.breakpoint('desktop-up')}) {
      left: 190px;
    }
  }

  &:after {
    /* content: "";
    background-image: url("https://"); */
    width: 61px;
    height: 163px;
    display: block;
    position: absolute;
    top: 90px;
    z-index: -4;
    left: 140px;

    /* ${mixins.image2x('https://', '61px', '163px')}; */

    @media (${mixins.breakpoint('desktop-up')}) {
      top: 150px;
      left: 240px;
    }
  }
`;
