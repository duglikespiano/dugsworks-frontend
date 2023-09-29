import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import HeaderKo from './shared/HeaderKo';
import NavKo from './shared/NavKo/NavKo';
import FooterKo from './shared/FooterKo';

export default function MainJp() {
	return (
		<Fragment>
			<HeaderKo />
			<NavKo />
			<Outlet />
			<FooterKo />
		</Fragment>
	);
}
