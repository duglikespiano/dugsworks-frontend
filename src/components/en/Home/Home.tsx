import { useContext, Fragment } from 'react';
import Profile from './Profile/Profile';
import Characteristic from './Characteristics/Characteristics';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';

export default function Home() {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<Profile isDarkmode={isDarkmode} />
			<Characteristic isDarkmode={isDarkmode} />
		</Fragment>
	);
}
