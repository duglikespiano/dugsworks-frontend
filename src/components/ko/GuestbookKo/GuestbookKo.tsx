import { Fragment } from 'react';
import GuestbookInputFormKo from './GuestbookInputFormKo/GuestbookInputFormKo';
import GuestbookMessagesKo from './GuestbookMessagesKo/GuestbookMessagesKo';
import styles from './GuestbookKo.module.scss';

export default function GuestbookKo() {
	return (
		<Fragment>
			<div className={styles['guestbook-box']}>
				<div className={styles['guestbook-box-title']}>방명록</div>
				<div className={styles['guestbook-inputform-box-description']}>메세지를 남기기 위해 아래 양식을 작성해주세요</div>
				<GuestbookInputFormKo />
				<hr className={styles['horizontalrule']} />
				<GuestbookMessagesKo />
			</div>
		</Fragment>
	);
}
