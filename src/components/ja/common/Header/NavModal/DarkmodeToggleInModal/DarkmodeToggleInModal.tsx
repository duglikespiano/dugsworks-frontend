import { useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { DarkmodeContext } from '../../../../../../contexts/DarkmodeContext';
import '../../../../../../scss/common/Header/NavModal/DarkmodeToggleInModal/DarkmodeToggleInModal.scss';

export default function DarkmodeToggleInModal() {
	const { isDarkmode, toggleDarkmode } = useContext(DarkmodeContext);

	return (
		<div id="darkmode-toggle-in-modal" onClick={toggleDarkmode}>
			<FiSun className={isDarkmode ? 'darkmode-toggle-in-modal-icon sun active' : 'darkmode-toggle-in-modal-icon sun'} />
			<FiMoon className={isDarkmode ? 'darkmode-toggle-in-modal-icon moon' : 'darkmode-toggle-in-modal-icon moon active'} />
		</div>
	);
}
