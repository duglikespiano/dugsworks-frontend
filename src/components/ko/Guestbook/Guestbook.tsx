import { Fragment } from 'react';
import GuestbookInputForm from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessages from './GuestbookMessages/GuestbookMessages';
import '../../../scss/Guestbook/Guestbook.scss';

export default function Guestbook() {
	return (
		<Fragment>
			<div id="guestbook-box">
				<div className="guestbook-box-title">방명록</div>
				<div className="guestbook-inputform-box-description">메세지를 남기기 위해 아래 양식을 작성해주세요</div>
				<GuestbookInputForm />
				<hr className="horizontalrule" />
				<GuestbookMessages />
			</div>
		</Fragment>
	);
}
