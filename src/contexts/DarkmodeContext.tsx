import { useState, createContext } from 'react';

export const DarkmodeContext = createContext({ isDarkmode: false, toggleDarkmode: () => {} });

export function DarkmodeProvider(props: { children: React.ReactNode }) {
	const [isDarkmode, setIsDarkmode] = useState(true);
	const toggleDarkmode = () => setIsDarkmode(!isDarkmode);
	return <DarkmodeContext.Provider value={{ isDarkmode, toggleDarkmode }}>{props.children}</DarkmodeContext.Provider>;
}
