import { useEffect, Fragment } from 'react';
import { BiMessageCheck, BiMessageError } from 'react-icons/bi';
import '../../../../../../scss/Guestbook/GuestbookMessages/GuestbookMessage/GuestbookMessageFetchResultModal/GuestbookMessageFetchResultModal.scss';
interface props {
	isFetchedProperly: boolean;
	isResultArrivedHandler: () => void;
	isDarkmode: boolean;
}

export default function GuestbookMessageFetchResultModal({ isFetchedProperly, isResultArrivedHandler, isDarkmode }: props) {
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
				id="guestbook-message-delete-fetch-result-modal"
				className={isDarkmode ? 'dark' : ''}
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
						{isFetchedProperly && '정상적으로'}
						{!isFetchedProperly && '오류가 발생했습니다'}
						<br />
						{isFetchedProperly && '삭제되었습니다'}
						{!isFetchedProperly && '비밀번호를 확인해주세요'}
					</div>
					<div className="guestbook-message-delete-fetch-result-modal-confirm-icon-box">
						<button
							className="guestbook-message-delete-fetch-result-modal-confirm-icon"
							onClick={() => {
								isResultArrivedHandler();
							}}
						>
							확인
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
