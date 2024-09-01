import { useContext, Fragment } from 'react';
import GuestbookInputForm from './GuestbookInputForm/GuestbookInputForm';
import GuestbookMessages from './GuestbookMessages/GuestbookMessages';
import { DarkmodeContext } from '../../../contexts/DarkmodeContext';
import '../../../scss/Guestbook/Guestbook.scss';

export default function Guestbook() {
	const { isDarkmode } = useContext(DarkmodeContext);
	return (
		<Fragment>
			<div id="guestbook-box">
				<div className="guestbook-box-title">芳名録</div>
				<div className="guestbook-inputform-box-description">メッセージを残る為に下の様式を作成してください</div>
				<GuestbookInputForm isDarkmode={isDarkmode} />
				<hr className="horizontalrule" />
				<GuestbookMessages isDarkmode={isDarkmode} />
			</div>
		</Fragment>
	);
}
