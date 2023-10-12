import { Fragment } from 'react';
import ContactFormBoxEn from './ContactFormBoxEn/ContactFormBoxEn';
import styles from './ContactEn.module.scss';

export default function ContactEn() {
	return (
		<Fragment>
			<div className={styles['contact-box-en']}>
				<div className={styles['contact-box-title-en']}>Contact</div>
				<ContactFormBoxEn />
			</div>
		</Fragment>
	);
}
