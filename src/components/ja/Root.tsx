import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderJa from './shared/Header';
import FooterJa from './shared/Footer';
import styles from './Root.module.scss';

export default function MainJa() {
	return (
		<Fragment>
			<div className={styles['font-ja']}>
				<HeaderJa />
				<Outlet />
				<FooterJa />
			</div>
		</Fragment>
	);
}
