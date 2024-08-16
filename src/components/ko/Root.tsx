import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderKo from './shared/Header';
import FooterKo from './shared/Footer';
import styles from './Root.module.scss';

export default function MainJp() {
	return (
		<Fragment>
			<div className={styles['font-ko']}>
				<HeaderKo />
				<Outlet />
				<FooterKo />
			</div>
		</Fragment>
	);
}
