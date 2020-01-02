import React, { useState, createContext, useContext, useEffect } from 'react';

import { languageOptions, dictionaryList } from '../languages';

async function getGeoInfo(langOpt) {
	await fetch('https://ipapi.co/json/')
		.then(response => response.json())
		.then(data => {
			const lang = langOpt.find(item => item.text === data.country_code);
			localStorage.getItem('language', lang.id);
		})
		.catch(error => {
			console.log(error);
		});
}

export const LanguageContext = createContext({
	language:
		localStorage.getItem('language') != null
			? languageOptions.find(item => item.id === localStorage.getItem('language'))
			: languageOptions[0],
	dictionary:
		dictionaryList[
			localStorage.getItem('language') != null
				? localStorage.getItem('language')
				: languageOptions[0].id
		]
});

export function LanguageProvider(props) {
	const languageContext = useContext(LanguageContext);
	const [language, setLanguage] = useState(languageContext.language);
	const [dictionary, setDictionary] = useState(languageContext.dictionary);

	const provider = {
		language,
		dictionary,
		setLanguage: selectedLanguage => {
			setLanguage(selectedLanguage);
			setDictionary(dictionaryList[selectedLanguage.id]);
		}
	};

	return <LanguageContext.Provider value={provider}>{props.children}</LanguageContext.Provider>;
}

export function Text(props) {
	const languageContext = useContext(LanguageContext);
	return languageContext.dictionary[props.tid];
}
