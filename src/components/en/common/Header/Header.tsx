import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import Hamburger from './Hamburger/Hamburger';
import NavModal from '../NavModal/NavModal';
import '../../../../scss/common/Header/Header.scss';

export default function Header() {
	return (
		<Fragment>
			<header id="header">
				<h1 className="logo">
					<Link className="page-title" to={'/en'}>
						Dug's Works
					</Link>
				</h1>
				<Nav />
				<LanguageSelector />
				<Hamburger isOpen={false} />
				<NavModal isOpen={false} />
			</header>
		</Fragment>
	);
}
