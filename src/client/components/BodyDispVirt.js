import React from 'react';
import '../../App.css';
import Button from '../elements/Button/Button';

export default function BodyDispVirt() {
	return (
		<div className='container center'>
			<div className='columns'>
				<div className='column is-5'>
					<img
						className='img-phone'
						src='https://res.cloudinary.com/ohcash/image/upload/v1562852068/cardWallet/pictureOneCardBlurr.png'
						alt='multcards'
					/>
				</div>
				<div className='column is-7'>
					<div class='media-content'>
						<div class='content'>
							<h1 class='title is-size-4'>No more credit card!</h1>
							<p class='is-size-5'>
								Bulma is a modern CSS framework from @jgthms, based on Flexbox. Using Bulma, we can
								describe our website's design using just classes. ᕕ( ᐛ )ᕗ
							</p>
						</div>
					</div>
					<Button />
				</div>
			</div>
		</div>
	);
}
