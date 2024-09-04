import { useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { DarkmodeContext } from '../../../../../contexts/DarkmodeContext';
import '../../../../../scss/common/Header/DarkmodeToggle/DarkmodeToggle.scss';

export default function DarkmodeToggle() {
	const { isDarkmode, toggleDarkmode } = useContext(DarkmodeContext);
	return (
		<div id="darkmode-toggle" onClick={toggleDarkmode}>
			<FiSun className={isDarkmode ? 'darkmode-toggle-icon sun active' : 'darkmode-toggle-icon sun'} />
			<FiMoon className={isDarkmode ? 'darkmode-toggle-icon moon ' : 'darkmode-toggle-icon moon active'} />
		</div>
	);
}
