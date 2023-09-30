import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderEn from './shared/HeaderEn';
import FooterEn from './shared/FooterEn';
import styles from './RootEn.module.css';

export default function MainEn() {
	return (
		<Fragment>
			<div className={styles['font-en']}>
				<HeaderEn />
				<Outlet />
				<FooterEn />
			</div>
		</Fragment>
	);
}
