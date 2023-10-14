import { Fragment } from 'react';
import { messagesSlicePropsType } from '../../../../../sliceStore';
import styles from './GuestbookMessageEn.module.scss';

export default function GuestbookMessageEn({ message }: messagesSlicePropsType) {
	return (
		<Fragment>
			<div className={styles['guestbook-message-box']}>
				<div className={styles['guestbook-message-writer-date-box']}>
					<div className={styles['guestbook-message-writer']}>{message.writer}</div>
					<div className={styles['guestbook-message-date']}>{message.date}</div>
				</div>
				<div className={styles['guestbook-message-text']}>{message.message}</div>
			</div>
		</Fragment>
	);
}
