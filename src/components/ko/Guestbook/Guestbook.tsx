import { useContext, Fragment } from 'react';
import GuestbookInputForm from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessages from './GuestbookMessages/GuestbookMessages';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';
import '../../../scss/Guestbook/Guestbook.scss';

export default function Guestbook() {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<div id="guestbook-box" className={isDarkmode ? 'dark' : ''}>
				<div className="guestbook-box-title">방명록</div>
				<div className="guestbook-inputform-box-description">메세지를 남기기 위해 아래 양식을 작성해주세요</div>
				<GuestbookInputForm isDarkmode={isDarkmode} />
				<hr className="horizontalrule" />
				<GuestbookMessages isDarkmode={isDarkmode} />
			</div>
		</Fragment>
	);
}
