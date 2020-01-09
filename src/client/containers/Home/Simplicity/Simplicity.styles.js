import styled from 'styled-components';
import * as mixins from '../../../assets/styles/_mixins';

export const Simplicity = styled.section`
	position: relative;
	margin-top: 140px;
	z-index: 0;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 250px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		margin-top: 250px;
	}
`;

export const SimplicityContent = styled.div`
	margin: 0px 11% 0 11%;
	text-align: center;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		text-align: left;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		${mixins.container()};
	}
	h2 {
		margin-bottom: 20px;
	}

	p {
		&:last-child {
			margin-bottom: 48px;
		}
	}

	img {
		@media (${mixins.breakpoint('desktop-up')}) {
			position: relative;
			left: 50px;
			top: -10px;
		}
	}
`;

export const SimplicityCopy = styled.div`
	margin-top: 50px;
	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		margin-top: 80px;
	}

	img {
		left: 0px;
	}
`;

// export const SimplicitySplash = styled.span`
// 	position: absolute;
// 	top: -175px;
// 	right: 0px;
// 	z-index: -2;

// 	&:after {
// 		background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1536842986/website-v2/Travel/notifications-sand-1-m.jpg');
// 		background-repeat: no-repeat;
// 		display: block;
// 		width: 290px;
// 		height: 184px;
// 		content: '';

// 		${mixins.image2x(
// 			'https://res.cloudinary.com/dzatxn6bx/image/upload/v1536842986/website-v2/Travel/notifications-sand-1-m_2x.jpg',
// 			'290px',
// 			'184px'
// 		)};
// 	}

// 	@media (${mixins.breakpoint('tablet-landscape-up')}) {
// 		top: -245px;
// 	}

// 	@media (${mixins.breakpoint('desktop-up')}) {
// 		top: -490px;

// 		&:after {
// 			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1537890394/website-v2/Travel/notifications-sand-1.jpg');
// 			background-repeat: no-repeat;
// 			display: block;
// 			width: 762px;
// 			height: 394px;
// 			content: '';

// 			${mixins.image2x(
// 				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1537890394/website-v2/Travel/notifications-sand-1_2x.jpg',
// 				'762px',
// 				'394px'
// 			)};
// 		}
// 	}
// `;

// export const SimplicitySplash2 = styled.div`
// 	@media (${mixins.breakpoint('desktop-up')}) {
// 		position: absolute;
// 		top: -300px;
// 		left: 0px;
// 		z-index: -2;

// 		&:after {
// 			background-image: url('https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939028/website-v2/Travel/notifications-sand-2.jpg');
// 			background-repeat: no-repeat;
// 			display: block;
// 			width: 353px;
// 			height: 1276px;
// 			content: '';
// 			float: right;

// 			${mixins.image2x(
// 				'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539939028/website-v2/Travel/notifications-sand-2_2x.jpg',
// 				'353px',
// 				'1276px'
// 			)};
// 		}
// 	}
// `;

export const SimplicityFeatures = styled.ul`
	width: 75%;
	margin: 0 auto;
	top: -39px;
	position: relative;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 55%;
		top: -29px;
		margin: 0px;
	}

	@media (${mixins.breakpoint('desktop-up')}) {
		width: 35%;
	}
`;

export const SimplicityFeaturesItem = styled.div`
      @media (${mixins.breakpoint('desktop-up')}) {
    top: 20px;
    opacity: 0;
    visibility: hidden;
    position: relative;
  }
}`;
