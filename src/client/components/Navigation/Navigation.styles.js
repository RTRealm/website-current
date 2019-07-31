import styled from 'styled-components';

export const MobileNav = styled.nav`
	height: 101%;
	background-color: #000;
	width: 100vw;
	margin-left: -41px;
	margin-top: -30px;
	border-top: 90px solid #000;
	position: fixed;
	z-index: 4;
	overflow: scroll;

	ul.mobile-navigation__list {
		li {
			margin: 25px 0;

			a {
				color: #fff;
			}
		}
	}
`;
