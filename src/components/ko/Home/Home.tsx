import { Fragment } from 'react';
import ProfileKo from './Profile/Profile';
import CharacteristicKo from '../../ko/Home/Characteristics/Characteristic';

export default function HomeKo() {
	return (
		<Fragment>
			<ProfileKo />
			<CharacteristicKo />
		</Fragment>
	);
}
