import { Fragment } from 'react';
import ContactFormBoxJa from './ContactFormBoxJa/ContactFormBoxJa';
import styles from './ContactJa.module.scss';

export default function ContactJa() {
	return (
		<Fragment>
			<div className={styles['contact-box-ja']}>
				<div className={styles['contact-box-title-ja']}>問い合わせ</div>
				<ContactFormBoxJa />
			</div>
		</Fragment>
	);
}
