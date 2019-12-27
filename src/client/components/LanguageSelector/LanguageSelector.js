import React, { useContext } from 'react';
import { languageOptions } from '../../languages';
import { LanguageContext } from '../../containers/Language';

export default function LanguageSelector() {
	const languageContext = useContext(LanguageContext);

	const handleLanguageChange = event => {
		const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
		languageContext.setLanguage(selectedLanguage);
	};

	return (
		<div className='select' onChange={handleLanguageChange} value={languageContext.language.id}>
			<select>
				{languageOptions.map(item => (
					<option key={item.id} value={item.id}>
						{item.text}
					</option>
				))}
			</select>
		</div>
	);
}
