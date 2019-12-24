import styled from 'styled-components';
import * as mixins from '../../assets/styles/_mixins';
import * as variables from '../../assets/styles/_variables';

export const Tab = styled.section`
	.tab-list {
		border-bottom: 1px solid #ccc;
		padding-left: 0;
	}

	.tab-list-item {
		display: inline-block;
		list-style: none;
		margin-bottom: -1px;
		padding: 0.5rem 0.75rem;
	}

	.tab-list-active {
		background-color: white;
		border: solid #ccc;
		border-width: 1px 1px 0 1px;
	}
`;
