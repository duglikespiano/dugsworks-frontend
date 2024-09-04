import { Fragment, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import Hamburger from './Hamburger/Hamburger';
import NavModal from './NavModal/NavModal';
import DarkmodeToggle from './DarkmodeToggle/DarkmodeToggle';
import { DarkmodeContext } from '../../../../contexts/DarkmodeContext';
import { setLocalStorageDarkmode } from '../../../../functions/commonFunctions';
import '../../../../scss/common/Header/Header.scss';

export default function Header() {
	const { isDarkmode } = useContext(DarkmodeContext);
	const [isHamburgerActive, setIsHamburgerActive] = useState(false);
	const [isNavModalActive, setIsNavModalActive] = useState(false);
	const hamburgerHandler = (isHamburgerActive: boolean) => setIsHamburgerActive(!isHamburgerActive);
	const navModalHandler = (isNavModalActive: boolean) => setIsNavModalActive(!isNavModalActive);

	useEffect(() => {
		if (setLocalStorageDarkmode() === 'dark') {
			localStorage.setItem('dugsworks-darkmode', true.toString());
		} else if (setLocalStorageDarkmode() === 'light') {
			localStorage.setItem('dugsworks-darkmode', false.toString());
		}
	}, []);

	return (
		<Fragment>
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
			<header id="header" className={isDarkmode ? 'dark' : ''}>
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
				<Nav isDarkmode={isDarkmode} />
				<LanguageSelector isDarkmode={isDarkmode} />
				<DarkmodeToggle />
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
			</header>
		</Fragment>
	);
}
