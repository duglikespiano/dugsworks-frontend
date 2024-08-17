import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavEn from './Nav/Nav';
import LanguageSelectorEn from './LanguageSelector/LanguageSelector';
import '../../../../scss/common/Header/Header.scss';

export default function Header() {
	return (
		<Fragment>
			<header id="header">
				<Link className="page-title" to={'/en'}>
					Dug's Works
				</Link>
				<NavEn />
				<LanguageSelectorEn />
			</header>
		</Fragment>
	);
}
