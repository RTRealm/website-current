import React, { PureComponent } from 'react';

// Third party components
import LazyLoad from 'react-lazyload';

// Custom components
import InfoGroup from '../../../components/InfoGroup/InfoGroup';
import Image from '../../../components/Image/Image';

// Styles
import * as Styles from './Convenience.styles';

class Convenience extends PureComponent {
	state = {
		activateAnimation: false
	};

	// componentDidMount() {

	//   const gsap = require("gsap");

	//   const scrollMagic = require("ScrollMagic");

	//   require("animation.gsap");

	//   let width = document.querySelector("body").clientWidth;

	//   if (width >= 1224) {
	//     this.setState({ activateAnimation: true });

	//     let controller = new scrollMagic.Controller();

	//     let scene = new scrollMagic.Scene({
	//       triggerElement: ".convenience__content"
	//     })
	//       .setTween(
	//         gsap.TweenLite.to(".convenience__copy", 1, {
	//           autoAlpha: 0.75,
	//           display: "block",
	//           marginTop: 0,
	//           ease: gsap.Power1.easeOut
	//         })
	//       )
	//       .reverse(false)
	//       .addTo(controller);

	//     scene.triggerHook(0.75);
	//   }
	// }

	render() {
		return (
			<Styles.Convenience
				className={
					'is-hidden-mobile ' + (this.state.activateAnimation ? 'convenience--animate' : '')
				}
			>
				<Styles.ConvenienceContent className='convenience__content columns'>
					<Styles.ConvenienceImage className='column is-5'>
						<Styles.ConvenienceSplash2 />
						<Styles.ConvenienceImageWrapper>
							<LazyLoad once={true} height={644} offset={500}>
								<Image
									set={{
										desk: true
									}}
									source={{
										desk:
											'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539855474/website-v2/Homepage/Light/convenience-card_2x'
									}}
									size={{ max: 'min-width:769px' }}
									alt='Curve mobile app showing Natwest card transactions'
									defaultFormat='png'
									class='convenience__image-card'
								/>

								<Image
									set={{
										desk: true
									}}
									source={{
										desk:
											'https://res.cloudinary.com/dzatxn6bx/image/upload/v1539354369/website-v2/Homepage/Light/simple-phone_2x'
									}}
									size={{ max: 'min-width:769px' }}
									alt='Curve mobile app showing Natwest card transactions'
									defaultFormat='png'
									class='convenience__image-phone'
								/>
							</LazyLoad>
						</Styles.ConvenienceImageWrapper>
					</Styles.ConvenienceImage>
					<div className='column is-6 convenience__copy'>
						<InfoGroup title={'All for you'} subtitle={'Convenience'}>
							<p>
								Wouldn’t it be nice if managing your money wasn’t a big, stressful, complicated
								thing?
							</p>

							<p>
								Well, hello. Our friendly app lets you magically use all your current cards through
								one simple, secure Curve Mastercard.
							</p>
							<p>
								It’s the only card you need to carry. Plus, you’ll get instant cashback rewards from
								your favourite retailers and you can spend abroad with no exchange fees. Nice and
								simple.
							</p>
						</InfoGroup>
					</div>
				</Styles.ConvenienceContent>
			</Styles.Convenience>
		);
	}
}

export default Convenience;
