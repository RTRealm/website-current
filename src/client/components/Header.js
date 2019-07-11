import React from 'react';
import logo from '../../img/STlogo1.png';

export default function Header() {
	return (
		<div>
			<img src={logo} alt='logo' style={{ height: 100, width: 100, margin: 10 }} />
		</div>
	);
}
