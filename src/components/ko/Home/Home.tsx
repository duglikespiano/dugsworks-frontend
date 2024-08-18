import { Fragment } from 'react';
import Profile from './Profile/Profile';
import Characteristic from './Characteristics/Characteristic';

export default function Home() {
	return (
		<Fragment>
			<Profile />
			<Characteristic />
		</Fragment>
	);
}
