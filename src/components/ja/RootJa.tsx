import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderJa from './shared/HeaderJa';
import FooterJa from './shared/FooterJa';
import styles from './RootJa.module.css';

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
