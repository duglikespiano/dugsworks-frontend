import { Fragment } from 'react';
import ContactFormBox from './ContactFormBox/ContactFormBox';
import styles from './Contact.module.scss';

export default function ContactEn() {
	return (
		<Fragment>
			<div className={styles['contact-box-en']}>
				<div className={styles['contact-box-title-en']}>Contact</div>
				<ContactFormBox />
			</div>
		</Fragment>
	);
}
