import { Fragment } from 'react';
import styles from './NavEn.module.scss';

export default function NavEn() {
	return (
		<Fragment>
			<ul className={styles['nav-links']}>
				<li className={styles['nav-link']}>About</li>
				<li className={styles['nav-link']}>Projects</li>
				<li className={styles['nav-link']}>Contact</li>
				<li className={styles['nav-link']}>Guestbook</li>
			</ul>
		</Fragment>
	);
}
