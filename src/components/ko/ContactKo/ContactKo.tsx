import { Fragment } from 'react';
import ContactFormBoxKo from './ContactFormBoxKo/ContactFormBoxKo';
import styles from './ContactKo.module.scss';

export default function ContactKo() {
	return (
		<Fragment>
			<div className={styles['contact-box-ko']}>
				<div className={styles['contact-box-title-ko']}>문의처</div>
				<ContactFormBoxKo />
			</div>
		</Fragment>
	);
}
