import { Fragment } from 'react';
import ProfileEn from './Profile/Profile';
import CharacteristicEn from './Characteristics/Characteristic';

export default function HomeEn() {
	return (
		<Fragment>
			<ProfileEn />
			<CharacteristicEn />
		</Fragment>
	);
}
