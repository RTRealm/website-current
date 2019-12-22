import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const TravelCashback = styled.section`
	position: relative;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 575px;
		margin-bottom: 540px;
	}
`;

export const TravelCashbackSplash = styled.span`
	position: absolute;
	top: -350px;
	right: 0px;
	z-index: -2;

	&:after {
		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1536834125/website-v2/Travel/cashback-sand-1-m.jpg');
		background-repeat: no-repeat;
		display: block;
		width: 273px;
		height: 485px;
		content: '';

		${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1536834125/website-v2/Travel/cashback-sand-1-m_2x.jpg',
			'273px',
			'485px'
		)};
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		top: -975px;

		&:after {
			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939028/website-v2/Travel/cashback-sand-1.jpg');
			width: 158px;
			height: 985px;

			${mixins.image2x(
				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939028/website-v2/Travel/cashback-sand-1_2x.jpg',
				'158px',
				'985px'
			)};
		}
	}
`;

export const TravelCashbackContent = styled.div`
	margin: 300px 11% 0 11%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin: 350px 11% 0 11%;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		position: relative;
	}
`;

export const TravelCaskbackCopy = styled.div`
	text-align: center;
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 49%;
		margin-left: 50px;
		text-align: left;
	}
`;

export const TravelCaskbackCopyTerms = styled.p`
	font-size: 16px;
	font-weight: 300;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		font-size: 22px;
	}
`;

export const TravelCashbackBrands = styled.div`
	margin: 10px auto 0 auto;
	position: relative;
	width: 70%;

	.travel-cashback__mobile-p {
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

export const TravelCashbackBrandsList = styled.ul`
	display: flex;
	text-align: center;
	align-items: center;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-left: -10%;
	}
`;

export const TravelCashbackBrandsItem = styled.div`
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

export const TravelCashbackBrandsImage = styled.div`
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

// export const TravelCashbackSplash2 = styled.span`
// 	position: absolute;
// 	bottom: -100px;
// 	left: 0px;
// 	z-index: -2;

// 	&:after {
// 		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836717/website-v2/Travel/cashback-sand-2-m.jpg');
// 		background-repeat: no-repeat;
// 		display: block;
// 		width: 375px;
// 		height: 262px;
// 		content: '';
// 		float: right;

// 		${mixins.image2x(
// 			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1536836717/website-v2/Travel/cashback-sand-2-m_2x.jpg',
// 			'375px',
// 			'262px'
// 		)};
// 	}

// 	@media (${mixins.breakpoint('tablet-landscape-up')}) {
// 		bottom: -540px;
// 		width: 70%;

// 		@media (${mixins.breakpoint('desktop-up')}) {
// 			width: auto;
// 		}

// 		&:after {
// 			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537887640/website-v2/Travel/cashback-sand-2.jpg');
// 			width: 831px;
// 			height: 599px;

// 			${mixins.image2x(
// 				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537887642/website-v2/Travel/cashback-sand-2_2x.jpg',
// 				'831px',
// 				'599px'
// 			)};
// 		}
// 	}
// `;

export const TravelCashbacksplash3 = styled.span`
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		position: absolute;
		top: -410px;
		left: 0px;
		z-index: -2;

		@media (${mixins.breakpoint('desktop-up')}) {
			top: -325px;
		}

		&:after {
			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939728/website-v2/Travel/cashback-splash-1.jpg');
			background-repeat: no-repeat;
			display: block;
			width: 265px;
			height: 384px;
			content: '';
			float: right;

			${mixins.image2x(
				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939729/website-v2/Travel/cashback-splash-1_2x.jpg',
				'265px',
				'384px'
			)};
		}
	}
`;

export const TravelCashbackImage = styled.div`
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
      background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1537349710/website-v2/Travel/cashback-splash-2.jpg");
      background-repeat: no-repeat;
      display: block;
      width: 2268px;
      height: 1185px;
      content: "";
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
    content: "";
    background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1536939259/website-v2/Travel/cashback-bubbles-2.png");
    width: 300px;
    height: 300px;
    display: block;
    position: absolute;
    top: 110px;
    z-index: -3;
    left: 100px;

    ${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1536939259/website-v2/Travel/cashback-bubbles-2_2x.png',
			'300px',
			'300px'
		)};

    @media (${mixins.breakpoint('desktop-up')}) {
      left: 190px;
    }
  }

  &:after {
    content: "";
    background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1536939258/website-v2/Travel/cashback-bubbles-1.png");
    width: 61px;
    height: 163px;
    display: block;
    position: absolute;
    top: 90px;
    z-index: -4;
    left: 140px;

    ${mixins.image2x(
			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1536939258/website-v2/Travel/cashback-bubbles-1_2x.png',
			'61px',
			'163px'
		)};

    @media (${mixins.breakpoint('desktop-up')}) {
      top: 150px;
      left: 240px;
    }
  }
`;
