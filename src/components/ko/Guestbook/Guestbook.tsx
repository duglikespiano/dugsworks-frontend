import { Fragment } from 'react';
import GuestbookInputFormKo from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessagesKo from './GuestbookMessages/GuestbookMessages';
import styles from './Guestbook.module.scss';

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
