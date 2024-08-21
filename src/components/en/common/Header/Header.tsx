import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import Hamburger from './Hamburger/Hamburger';
import NavModal from './NavModal/NavModal';
import '../../../../scss/common/Header/Header.scss';

export default function Header() {
	const [isHamburgerActive, setIsHamburgerActive] = useState(false);
	const [isNavModalActive, setIsNavModalActive] = useState(false);
	const hamburgerHandler = (isHamburgerActive: boolean) => setIsHamburgerActive(!isHamburgerActive);
	const navModalHandler = (isNavModalActive: boolean) => setIsNavModalActive(!isNavModalActive);

	return (
		<Fragment>
			<header id="header">
				<h1
					className="logo"
					onClick={() => {
						setIsHamburgerActive(false);
						setIsNavModalActive(false);
					}}
				>
					<Link className="page-title" to={'/en'}>
						Dug's Works
					</Link>
				</h1>
				<Nav />
				<LanguageSelector />
				<Hamburger
					isHamburgerActive={isHamburgerActive}
					isNavModalActive={isNavModalActive}
					hamburgerHandler={() => {
						hamburgerHandler(isHamburgerActive);
					}}
					navModalHandler={() => {
						navModalHandler(isNavModalActive);
					}}
				/>
				<NavModal
					isHamburgerActive={isHamburgerActive}
					isNavModalActive={isNavModalActive}
					hamburgerHandler={() => {
						hamburgerHandler(isHamburgerActive);
					}}
					navModalHandler={() => {
						navModalHandler(isNavModalActive);
					}}
				/>
			</header>
		</Fragment>
	);
}
