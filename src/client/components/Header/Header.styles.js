import styled from 'styled-components';
import * as vars from '../../assests/styles/_variables';
import * as mixins from '../../assests/styles/_mixins';

export const Header = styled.header`
  padding-top: 29px;
  margin: 0px 29px 0 41px;
  position: relative;
  min-height: 50px;

  @media (${mixins.breakpoint('tablet-landscape-up')}) {
    z-index: 1;
  }

    @media (${mixins.breakpoint('desktop-up')}) {
        ${mixins.container()};
        padding-top: 58px;
    }

    img {
        width: 96px;
        display: inline-block;

        @media (${mixins.breakpoint('tablet-portrait-up')}) {
            width: 150px;
        }

        @media (${mixins.breakpoint('tablet-landscape-up')}) {
            width: 230px;
            margin-left: 23px;
        }

        @media (${mixins.breakpoint('desktop-up')}) {
            width: 290px;
        }        
    }

    li {
        font-style: normal;
        font-weight: ${vars.poppinsSemibold};
        line-height: normal;
        font-size: 1.2em;
        text-transform: uppercase;
        text-align: center;
        padding:6px 0 0 0;

        @media (${mixins.breakpoint('desktop-up')}) {
          padding: 14px 0 0 0;
        }

        a {
            padding: 10px 13px;
            border-radius: 30px;
            display: inline-block;
            transition: background-color 0.3s, color 0.3s;
            width: 70%;

            @media (${mixins.breakpoint('tablet-landscape-up')}) {
                width: 90%;
            }
        }

        a:hover,
        a:active {
            color: #fff;
        }

        a:hover {
            background: ${vars.colorAccent};
        }

        a:active {
            background: ${vars.colorPress};
        }
    }

    &.header--dark-theme {
        .header__splash-1 {
            position: absolute;
            top: -17px;
            left: -42px;
            z-index: -2;

            &:after {
            background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1537356879/website-v2/Homepage%20-%20Dark%20version/header-splash-m.jpg");
            background-repeat: no-repeat;
            display: block;
            width: 375px;
            height: 285px;
            content: "";
            float: right;

                ${mixins.image2x(
									'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537356879/website-v2/Homepage%20-%20Dark%20version/header-splash-m_2x.jpg',
									'375px',
									'285px'
								)}
            }

            @media (${mixins.breakpoint('tablet-landscape-up')}) {
                top: -46px;

                &:after {
                    background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1537357595/website-v2/Homepage%20-%20Dark%20version/header-splash.jpg");
                    width: 547px;
                    height: 373px;

                    ${mixins.image2x(
											'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537357595/website-v2/Homepage%20-%20Dark%20version/header-splash_2x.jpg',
											'547px',
											'373px'
										)}
                }
            }
        }

        li a {
            color: #fff;
        }
    }   

    &.header--light-theme {
        .header__splash-1 {
            background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1537807281/website-v2/Homepage/Light/header-splash-m.png");
            top: -80px;
            left: -290px;
            width: 1131px;
            height: 324px;
            z-index: -1;

            ${mixins.image2x(
							'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537807281/website-v2/Homepage/Light/header-splash-m_2x.png',
							'1131px',
							'324px'
						)}

            @media (${mixins.breakpoint('tablet-landscape-up')}) {
                left: -630px;
            }

            @media (${mixins.breakpoint('desktop-up')}) {
                width: 1230px;
                height: 324px;
                top: -47px;
                left: -562px;
                background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1537805648/website-v2/Homepage/Light/header-splash.png");

                ${mixins.image2x(
									'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537805649/website-v2/Homepage/Light/header-splash_2x.png',
									'1230px',
									'324px'
								)}
            }
        }

        a {
            color: #000;
        }
    }
`;

export const HeaderMobile = styled.div`
	width: 90vw;
	z-index: 3;
	position: absolute;

	&.header__mobile--menu-open {
		position: fixed;
		z-index: 5;
	}
`;

export const HeaderSplash1 = styled.span`
	background-repeat: no-repeat;
	position: absolute;
	display: block;
	z-index: -1;
`;

export const HeaderMobileButton = styled.div`
	text-align: right;
	padding: 5px 0 0px 12px;

	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		padding: 0.75rem;
	}

	button {
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
		max-width: 125px;
	}
`;

export const HeaderMobileNav = styled.div`
	text-align: center;
	padding: 11px 0 0 10px;

	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		padding: 1.25rem 1rem 0 0;
		text-align: right;
	}

	.header__mobile-menu-button {
		background: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537358404/website-v2/Icons/burger-menu.svg')
			no-repeat;
		width: 20px;
		height: 14px;
		border-radius: 0px;
		cursor: pointer;
		border: none;
		outline: none;

		&:active,
		&:hover {
			background-color: transparent;
		}

		&.header__mobile-menu-button--close {
			background: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1538997196/website-v2/Icons/close.svg')
				no-repeat top center;
			width: 20px;
			height: 20px;
		}
	}

	&.header__mobile-nav--black .header__mobile-menu-button {
		outline: none;
		background: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537521962/website-v2/Icons/burger-menu-black.svg')
			no-repeat;

		&.header__mobile-menu-button--close {
			background: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1538997196/website-v2/Icons/close.svg')
				no-repeat top center;
			width: 20px;
			height: 20px;
		}
	}
`;

export const HeaderNav = styled.nav`
	ul {
		margin-top: 2px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: -5px;
	}
`;

export const HeadeMobileNavList = styled.div`
	${mixins.textAnimationFadeIn()};
`;
