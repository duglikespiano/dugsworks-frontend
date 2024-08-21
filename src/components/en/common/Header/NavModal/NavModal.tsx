import { useEffect, Fragment } from 'react';
import NavInModal from './NavInModal/NavInModal';
import LanguageSelectorInModal from './LanguageSelectorInModal/LanguageSelectorInModal';
import DarkmodeToggleInModal from './DarkmodeToggleInModal/DarkmodeToggleInModal';
import '../../../../../scss/common/Header/NavModal/NavModal.scss';

export default function NavModal(props: {
	isHamburgerActive: boolean;
	isNavModalActive: boolean;
	hamburgerHandler: () => void;
	navModalHandler: () => void;
}) {
	useEffect(() => {
		if (props.isNavModalActive) {
			document.body.style.cssText = `
			position: fixed; 
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;`;
		} else {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		}
	}, [props.isNavModalActive]);

	return (
		<Fragment>
			<div id="nav-modal" className={props.isNavModalActive ? 'active' : ''}>
				<NavInModal navModalHandler={props.navModalHandler} hamburgerHandler={props.hamburgerHandler} />
				<div className="language-selector-darkmode-toggle-in-modal-box">
					<LanguageSelectorInModal />
					<DarkmodeToggleInModal />
				</div>
			</div>
		</Fragment>
	);
}
