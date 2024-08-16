import { Fragment } from 'react';
import GuestbookInputFormEn from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessagesEn from './GuestbookMessages/GuestbookMessages';
import styles from './Guestbook.module.scss';

export default function GuestbookEn() {
	return (
		<Fragment>
			<div className={styles['guestbook-box']}>
				<div className={styles['guestbook-box-title']}>Guestbook</div>
				<div className={styles['guestbook-inputform-box-description']}>Fill the form below to leave your message</div>
				<GuestbookInputFormEn />
				<hr className={styles['horizontalrule']} />
				<GuestbookMessagesEn />
			</div>
		</Fragment>
	);
}
