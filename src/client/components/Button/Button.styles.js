import styled from 'styled-components';
import * as vars from '../../assets/styles/_variables';

export const Button = styled.button`
	background-color: ${vars.colorAccent};
	padding: 11px 12 px;
	border-radius: 20px;
	font-weight: ${vars.poppinsSemibold};
	color: #fff;
	text-transform: uppercase;
	border-color: transparent;
	font-size: 12px;
	transition: background-color 0.3s;
	width: 100%;
	font-family: ${vars.poppins};

	&:hover {
		background-color: ${vars.colorHover};
	}

	&:active {
		background-color: ${vars.colorPress};
	}

	&:focus {
		outline: none;
	}
`;
