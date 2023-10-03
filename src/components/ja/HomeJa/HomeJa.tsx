import { Fragment } from 'react';
import ProfileJa from './ProfileJa/ProfileJa';
import CharacteristicJa from './CharacteristicsJa/CharacteristicJa';

export default function HomeJa() {
	return (
		<Fragment>
			<ProfileJa />
			<CharacteristicJa />
		</Fragment>
	);
}
