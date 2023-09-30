import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderKo from './shared/HeaderKo';
import FooterKo from './shared/FooterKo';

export default function MainJp() {
	return (
		<Fragment>
			<HeaderKo />
			<Outlet />
			<FooterKo />
		</Fragment>
	);
}
