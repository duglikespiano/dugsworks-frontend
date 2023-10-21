import { Fragment } from 'react';
import { messagesSlicePropsType } from '../../../../../sliceStore';
import styles from './GuestbookMessageKo.module.scss';

export default function GuestbookMessageKo({ message }: messagesSlicePropsType) {
	return (
		<Fragment>
			<div className={styles['guestbook-message-box']}>
				<div className={styles['guestbook-message-writer-date-box']}>
					<div className={styles['guestbook-message-writer']}>{message.name}</div>
					<div className={styles['guestbook-message-date']}>{message.created_at}</div>
				</div>
				<div className={styles['guestbook-message-text']}>{message.message}</div>
			</div>
		</Fragment>
	);
}
