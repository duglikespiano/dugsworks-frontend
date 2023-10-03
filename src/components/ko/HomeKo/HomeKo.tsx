import { Fragment } from 'react';
import ProfileKo from './ProfileKo/ProfileKo';
import CharacteristicKo from '../../ko/HomeKo/CharacteristicsKo/CharacteristicKo';

export default function HomeKo() {
	return (
		<Fragment>
			<ProfileKo />
			<CharacteristicKo />
		</Fragment>
	);
}
