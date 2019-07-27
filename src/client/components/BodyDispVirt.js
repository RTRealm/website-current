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
					<div>
						<h1>No more credit card!</h1>
					</div>
					<p class='is-hidden-mobile'>
						Bulma is a modern CSS framework from @jgthms, based on Flexbox. Using Bulma, we can
						describe our website's design using just classes. ᕕ( ᐛ )ᕗ
					</p>
					<div class='columns is-multiline is-hidden-mobile'>
						<div class='column'>
							<Button />
						</div>
						<div class='column'>
							<a href='https://rtrealm.com' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
