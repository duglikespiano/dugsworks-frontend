import { useState, createContext } from 'react';
import { setLocalStorageDarkmode } from '../functions/commonFunctions';

export const DarkmodeContext = createContext({ isDarkmode: false, toggleDarkmode: () => {} });

export function DarkmodeProvider(props: { children: React.ReactNode }) {
	const checker = setLocalStorageDarkmode() === 'dark' ? true : false;
	const [isDarkmode, setIsDarkmode] = useState(checker);
	const toggleDarkmode = () => {
		setIsDarkmode(!isDarkmode);
		let localStorageDarkmodeValue;
		if (isDarkmode === false) {
			localStorageDarkmodeValue = 'true';
		} else {
			localStorageDarkmodeValue = 'false';
		}
		localStorage.setItem('dugsworks-darkmode', localStorageDarkmodeValue);
	};
	return <DarkmodeContext.Provider value={{ isDarkmode, toggleDarkmode }}>{props.children}</DarkmodeContext.Provider>;
}
