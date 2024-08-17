import { useEffect, Fragment } from 'react';
import { BiMessageCheck, BiMessageError } from 'react-icons/bi';
import '../../../../../../scss/Guestbook/GuestbookMessages/GuestbookMessage/GuestbookMessageFetchResultModal/GuestbookMessageFetchResultModal.scss';
interface props {
	isFetchedProperly: boolean;
	isResultArrivedHandler: () => void;
}

export default function GuestbookMessageFetchResultModal({ isFetchedProperly, isResultArrivedHandler }: props) {
	useEffect(() => {
		document.body.style.cssText = `
			position: fixed;
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return (
		<Fragment>
			<div
				className="guestbook-message-delete-fetch-result-modal"
				onClick={(event) => {
					event.stopPropagation();
					if (event.target === event.currentTarget) {
						isResultArrivedHandler();
					}
				}}
			>
				<div className="guestbook-message-delete-fetch-result-modal-content-box">
					<div className="guestbook-message-delete-fetch-result-modal-checkicon-box">
						{isFetchedProperly && <BiMessageCheck className="guestbook-message-delete-fetch-result-modal-checkicon" />}
						{!isFetchedProperly && <BiMessageError className="guestbook-message-delete-fetch-result-modal-checkicon" />}
					</div>
					<div className="guestbook-message-delete-fetch-result-modal-resulttext">
						{isFetchedProperly && 'Your message'}
						{!isFetchedProperly && 'Error Occurred'}
						<br />
						{isFetchedProperly && 'has been deleted'}
						{!isFetchedProperly && 'Please check password'}
					</div>
					<div className="guestbook-message-delete-fetch-result-modal-confirm-icon-box">
						<button
							className="guestbook-message-delete-fetch-result-modal-confirm-icon"
							onClick={() => {
								isResultArrivedHandler();
							}}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
