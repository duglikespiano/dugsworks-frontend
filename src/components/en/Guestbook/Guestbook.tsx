import { Fragment } from 'react';
import GuestbookInputFormEn from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessagesEn from './GuestbookMessages/GuestbookMessages';
import '../../../scss/Guestbook/Guestbook.scss';

export default function Guestbook() {
	return (
		<Fragment>
			<div className="guestbook-box">
				<div className="guestbook-box-title">Guestbook</div>
				<div className="guestbook-inputform-box-description">Fill the form below to leave your message</div>
				<GuestbookInputFormEn />
				<hr className="horizontalrule" />
				<GuestbookMessagesEn />
			</div>
		</Fragment>
	);
}
