import { useContext, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { languages } from '../../../../../variables/variables';
import { DarkmodeContext } from '../../../../../contexts/DarkmodeContext';
import '../../../../../scss/common/Header/LanguageSelector/LanguageSelector.scss';

export default function LanguageSelector() {
	const { isDarkmode, toggleDarkmode } = useContext(DarkmodeContext);

	const navigate = useNavigate();
	const location = useLocation();

	const navigateByLanguage = (language: string) => {
		let newURL = '';
		let URLArray = location.pathname.split('/');
		if (language === '한글') {
			URLArray[1] = 'ko';
		} else if (language === '日本語') {
			URLArray[1] = 'ja';
		} else {
			URLArray[1] = 'en';
		}
		URLArray.slice(0, 1);
		newURL = URLArray.join('/');
		navigate(newURL);
	};

	return (
		<Fragment>
			<div id="language-selector-box" className={isDarkmode ? 'dark' : ''}>
				<button
					className="language-selector"
					onClick={() => {
						navigateByLanguage(languages[1].language);
					}}
				>
					{languages[1].language}
				</button>
				/
				<button
					className="language-selector"
					onClick={() => {
						navigateByLanguage(languages[2].language);
					}}
				>
					{languages[2].language}
				</button>
			</div>
		</Fragment>
	);
}
