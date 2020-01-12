import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';
import * as vars from '../../../assets/styles/_variables';

export const FooterNav = styled.nav`
	background-color: transparent;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		padding: 0;
	}
`;

export const FooterNavWrapper = styled.div`
	li {
		padding: 25px 0;
		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			padding: 0px 0;
		}
	}

	a {
		margin: 0 10px;
		padding: 6px 20px;
		border-radius: 30px;
		background-color: transparent;
		transition: background-color 0.25s;
		text-transform: uppercase;
		&:hover {
			background-color: #000;
		}
	}
	&.footer-nav__one {
		background-color: #6c6c6c;
		padding-top: 25px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			padding: 35px 0 40px 0;
		}

		ul {
			max-width: 1200px;
		}
	}

	&.footer-nav__two {
		background-color: #6c6c6c;
		padding-bottom: 25px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			background-color: #3c3b3b;
			padding: 35px 0 40px 0;
		}
		ul {
			max-width: 1070px;
		}
	}

	&.footer-nav__three {
		background-color: #252525;
		padding: 25px 0 25px 0;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			padding: 35px 0 40px 0;
		}

		ul {
			max-width: 1040px;

			li {
				width: 100%;

				@media (${mixins.breakpoint('tablet-landscape-up')}) {
					width: auto;
				}
			}
		}

		.footer-nav__social {
			width: auto;

			&:first {
				margin-left: 20px;
			}
			a {
				padding: 6px 10px;

				&:hover {
					background-color: transparent;
				}
			}
		}

		.footer-nav__cta {
			width: 80%;
			padding: 0 10%;

			@media (${mixins.breakpoint('tablet-portrait-up')}) {
				width: 35%;
				margin: 0 30%;
				padding: 0.75rem 7px;
			}

			@media (${mixins.breakpoint('tablet-landscape-up')}) {
				width: auto;
				margin: 0px;
			}

			button {
				position: relative;
				cursor: pointer;
				padding: 11px 20px;
				box-shadow: 0px 35px 35px rgba(0, 0, 0, 0.35);
				top: 0px;
				transition: box-shadow 0.2s, top 0.2s;
				@media (${mixins.breakpoint('tablet-landscape-up')}) {
					top: -7px;
					left: 20px;

					&:hover {
						top: -2px;
						box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.75);
					}
				}
			}
		}
	}
`;

export const FooterNavContent = styled.ul`
	li {
		text-align: center;
	}

	a {
		font-weight: ${vars.poppinsMedium};
		line-height: normal;
		font-size: 18px;

		color: #ffffff;
	}

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		${mixins.container()};
		li {
			margin-bottom: 0px;
		}

		.column {
			padding: 0.75rem 7px;
		}
	}
`;

export const FooterNavRegion = styled.div`
	button.button {
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;
		position: relative;
		top: -5px;
		outline: none;
		cursor: pointer;
		span {
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			font-size: 16px;
			color: #fff;
			padding-left: 12px;
		}
	}

	.footer-dropdown-arrow {
		/* background-image: url("https://res.cloudinary.com/dzatxn6bx/image/upload/v1548175587/website-v2/Icons/dropdown-arrow.svg"); */
		width: 8px;
		height: 6px;
		display: block;
		position: absolute;
		right: 0px;
		top: 17px;
	}

	.dropdown-menu {
		padding: 14px;
		a {
			color: #000;
			margin: 0;
			padding: 0.375rem 1rem;
			border-radius: 0px;

			&:hover {
				background-color: #999;
			}
		}
	}

	a.dropdown-item.is-active,
	button.dropdown-item.is-active {
		background-color: #ccc;
	}
`;

export const FooterNavRegionNoJs = styled.ul`
	span {
		color: #fff;
		border-bottom: 1px solid #fff;
		width: 100%;
		display: block;
		font-weight: 500;
		line-height: normal;
		font-size: 18px;
		padding-bottom: 10px;
		text-align: left;
	}

	a {
		text-align: left;
		padding: 12px 0 12px 6px;
		display: block;
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		transition: padding-left 0.2s;
		font-weight: ${vars.poppinsLight};

		&:hover {
			padding-left: 12px;
		}
	}
`;
