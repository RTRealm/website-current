import styled from 'styled-components';
import * as mixins from '../../assets/styles/_mixins';
import * as vars from '../../assets/styles/_variables';

export const Terms = styled.section`
	margin: 29px 24px 0 24px;

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		margin-top: 59px;
		padding-bottom: 29px;
	}
	h1,
	h2 {
		font-size: 2.5em;
		text-align: center;
		margin-bottom: 24px;
		line-height: 1em;
	}
	h3 {
		font-size: 2em;
		margin-bottom: 24px;
		line-height: 1em;
		color: #000;
		font-weight: ${vars.poppinsSemibold};
	}
	em {
		font-size: 1em;
		text-align: right;
		margin-bottom: 50px;
		line-height: 1em;
		color: #000;
		display: block;
	}

	br {
		margin-bottom: 20px;
	}

	div.terms__content {
		p {
			font-size: 1em;
			line-height: 25px;
			font-weight: ${vars.poppinsLight};
			margin-bottom: 2em;
		}

		table {
			width: 100%;

			tr th {
				text-align: center;
				background-color: #f5f5f5;
				padding: 10px;
				border: 1px solid #dbdbdb;
			}

			tr td {
				padding: 10px;
				border: 1px solid #dbdbdb;
				color: #000;
			}
		}
	}

	.terms__section--compact {
		ul.terms__content li {
			margin: 0;
		}
	}

	ul.terms__content {
		padding-left: 15px;
		li {
			font-size: 1em;
			line-height: 25px;
			margin-bottom: 2em;
			font-weight: ${vars.poppinsLight};

			ul {
				padding-left: 15px;
			}
		}

		p {
			font-size: 1em;
			line-height: 25px;
			font-weight: ${vars.poppinsLight};
			margin-top: 1em;
		}

		.subheading {
			font-weight: ${vars.poppinsMedium};
		}
	}

	.terms__links {
		p {
			font-size: 18px;
			margin-bottom: 24px;
		}
		a {
			display: block;
			margin-bottom: 24px;
		}
	}

	.terms__list {
		list-style-type: disc;
		padding-left: 20px;
		margin-left: 20px;
	}

	ol.terms__numbered-list {
		margin-left: 15px;
	}
`;

export const TermsSectionTitles = styled.h3`
	font-size: 25px;
	margin: 40px 0 20px 0;
	color: #000000;
`;

export const TermsSectionTitlesh4 = styled.h4`
	font-size: 18px;
	margin: 40px 0 20px 0;
	color: #000000;
`;

export const TableCol2 = styled.table`
	th,
	td {
		width: 50%;
	}
`;

export const TableCol3 = styled.table`
	th,
	td {
		width: 33%;
	}
`;

export const TableCol4 = styled.table`
	th,
	td {
		width: 25%;
	}
`;

export const ThCol1 = styled.th`
	width: 25%;
`;

export const ThCol2 = styled.th`
	width: 50%;
`;

export const ThCol3 = styled.th`
	width: 75%;
`;

export const TdCol1 = styled.th`
	width: 25%;
`;

export const TdCol2 = styled.th`
	width: 50%;
`;

export const TdCol3 = styled.th`
	width: 75%;
`;

export const TableWrapper = styled.div`
	margin-bottom: 20px;
`;

export const Compare = styled.section`
	margin: 29px 0 0 24px;

	overflow: scroll;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin: 29px 24px 0 24px;
		width: auto;
		overflow: hidden;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
		margin-top: 59px;
		padding-bottom: 29px;
	}

	.compare__table {
		overflow: scroll;
		width: 1000px;

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			overflow: hidden;
			width: auto;
		}
	}

	tr {
		border-bottom: 1px solid #ccc;
	}

	td,
	th {
		padding: 20px 12px 20px 0;
	}

	td {
		p {
			font-size: 16px;
			font-weight: ${vars.poppinsRegular};
		}

		div small {
			font-size: 12px;
		}
	}

	p {
		font-size: 14px;
		margin-top: 20px;
	}

	ul {
		justify-content: left !important;
	}

	.unlimited-cards__provider img {
		width: 25px;
	}
`;
