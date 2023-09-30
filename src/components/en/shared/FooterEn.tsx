import { Fragment } from 'react';
import styles from './FooterEn.module.scss';

export default function FooterEn() {
	return (
		<Fragment>
			<ul className={styles['footer-links']}>
				<li className={styles['footer-link']}>About</li>
				<li className={styles['footer-link']}>Projects</li>
				<li className={styles['footer-link']}>Contact</li>
				<li className={styles['footer-link']}>Guestbook</li>
			</ul>
		</Fragment>
	);
}
