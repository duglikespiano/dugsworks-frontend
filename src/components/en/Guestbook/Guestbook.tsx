import { Fragment } from 'react';
import GuestbookInputForm from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessages from './GuestbookMessages/GuestbookMessages';
import '../../../scss/Guestbook/Guestbook.scss';

export default function Guestbook() {
	return (
		<Fragment>
			<div id="guestbook-box">
				<div className="guestbook-box-title">Guestbook</div>
				<div className="guestbook-inputform-box-description">Fill the form below to leave your message</div>
				<GuestbookInputForm />
				<hr className="horizontalrule" />
				<GuestbookMessages />
			</div>
		</Fragment>
	);
}
