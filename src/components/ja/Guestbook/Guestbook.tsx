import { Fragment } from 'react';
import GuestbookInputFormJa from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessagesJa from './GuestbookMessages/GuestbookMessages';
import styles from './Guestbook.module.scss';

export default function GuestbookKo() {
	return (
		<Fragment>
			<div className={styles['guestbook-box']}>
				<div className={styles['guestbook-box-title']}>芳名録</div>
				<div className={styles['guestbook-inputform-box-description']}>メッセージを残る為に下の様式を作成してください</div>
				<GuestbookInputFormJa />
				<hr className={styles['horizontalrule']} />
				<GuestbookMessagesJa />
			</div>
		</Fragment>
	);
}
