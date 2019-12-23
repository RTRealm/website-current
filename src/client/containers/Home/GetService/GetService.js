import React from 'react';
import * as Styles from './GetService.styles';

import InfoGroup from '../../../components/InfoGroup/InfoGroup';
// import UnlimitedCards from '../../../components/UnlimitedCards/UnlimitedCards';

const getCurve = () => {
	return (
		<Styles.GetCurve>
			<Styles.GetCurveSplash />
			<Styles.GetCurveContent>
				<InfoGroup title={'Our Top Skills'} subtitle={'Get Service'}>
					<p className='is-hidden-tablet'>
						When you sync all your cards with Curve, your payment information is encrypted so your
						real card numbers are never shared with the retailer.
					</p>
				</InfoGroup>
				<div className='is-hidden-mobile'>
					<Styles.GetCurveBenefits className='get-curve__benefits columns is-multiline'>
						<Styles.GetCurveBenefit className='column is-6'>
							<div className='columns'>
								<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
									<h4>
										<em>Save</em>
									</h4>
								</Styles.GetCurveBenefitHeading>
								<Styles.GetCurveBenefitContent className='column'>
									<p>With access to the interbank rate, you can spend like a local.</p>
								</Styles.GetCurveBenefitContent>
							</div>
						</Styles.GetCurveBenefit>
						<Styles.GetCurveBenefit className='column is-6'>
							<div className='columns'>
								<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
									<h5>Earn</h5>
									<h4>
										<em>
											1 <span>%</span>
										</em>{' '}
									</h4>
								</Styles.GetCurveBenefitHeading>
								<Styles.GetCurveBenefitContent className='column'>
									<p>Get 1% instant cashback from a choice of Premium Retailers</p>
								</Styles.GetCurveBenefitContent>
							</div>
						</Styles.GetCurveBenefit>
						<Styles.GetCurveBenefit className='column is-6'>
							<div className='columns'>
								<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
									<h4>
										<em>210+</em>
									</h4>
								</Styles.GetCurveBenefitHeading>
								<Styles.GetCurveBenefitContent className='column'>
									<p>Curve works in all the countries and territories that support Mastercard</p>
								</Styles.GetCurveBenefitContent>
							</div>
						</Styles.GetCurveBenefit>

						<Styles.GetCurveBenefit className='column is-6'>
							<div className='columns'>
								<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
									<h4>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1537361448/website-v2/Icons/sync.svg'
											alt='infinite loop'
										/>
									</h4>
								</Styles.GetCurveBenefitHeading>
								<Styles.GetCurveBenefitContent className='column'>
									<p>All your cards in one Curve Card</p>
								</Styles.GetCurveBenefitContent>
							</div>
						</Styles.GetCurveBenefit>

						<Styles.GetCurveBenefit className='column is-6'>
							<div className='columns'>
								<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
									<h4>
										<em>
											£15
											<span>M</span>
										</em>{' '}
										insurance
									</h4>
								</Styles.GetCurveBenefitHeading>
								<Styles.GetCurveBenefitContent className='column'>
									<p>Global medical insurance, baggage loss, rental car damage & more...</p>
								</Styles.GetCurveBenefitContent>
							</div>
						</Styles.GetCurveBenefit>

						<Styles.GetCurveBenefit className='column is-6'>
							<div className='columns'>
								<Styles.GetCurveBenefitHeading className='column is-4-tablet is-3-desktop'>
									<h4>
										<img
											src='https://res.cloudinary.com/dzatxn6bx/image/upload/v1537361448/website-v2/Icons/sync.svg'
											alt='infinite loop'
										/>
									</h4>
								</Styles.GetCurveBenefitHeading>
								<Styles.GetCurveBenefitContent className='column'>
									<p>All your cards in one Curve Card</p>
								</Styles.GetCurveBenefitContent>
							</div>
						</Styles.GetCurveBenefit>
					</Styles.GetCurveBenefits>
					{/* <UnlimitedCards animate={true} cls={'get-curve__benefits'} /> */}
				</div>
			</Styles.GetCurveContent>
		</Styles.GetCurve>
	);
};

export default getCurve;
