import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import '../../../../scss/common/Header/Header.scss';

export default function Header() {
	return (
		<Fragment>
			<header id="header">
				<Link className="page-title" to={'/ja'}>
					Dug's Works
				</Link>
				<Nav />
				<LanguageSelector />
			</header>
		</Fragment>
	);
}
