import { Fragment } from 'react';
import styles from './FooterEn.module.scss';

export default function FooterEn() {
	return (
		<Fragment>
			<ul className={styles['footer-links-box-en']}>
				<li className={styles['footer-link-en']}>About</li>
				<li className={styles['footer-link-en']}>Projects</li>
				<li className={styles['footer-link-en']}>Contact</li>
				<li className={styles['footer-link-en']}>Guestbook</li>
			</ul>
		</Fragment>
	);
}
