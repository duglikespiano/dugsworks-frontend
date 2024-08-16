import { Fragment } from 'react';
import ProfileJa from './Profile/Profile';
import CharacteristicJa from './Characteristics/Characteristic';

export default function HomeJa() {
	return (
		<Fragment>
			<ProfileJa />
			<CharacteristicJa />
		</Fragment>
	);
}
