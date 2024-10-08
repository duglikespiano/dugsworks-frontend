import { useEffect, useRef, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { messagesActions } from '../../../../../../variables/sliceStore';
import '../../../../../../scss/Guestbook/GuestbookMessages/GuestbookMessage/GuestbookMessagePasswordModal/GuestbookMessagePasswordModal.scss';

interface props {
	isPasswordModalRequestedHandler: () => void;
	isProcessingHandler: (result: boolean) => void;
	isResultArrivedHandler: (result: boolean) => void;
	isFetchedProperlyHandler: (result: boolean) => void;
	messageId: number;
	isDarkmode: boolean;
}

export default function GuestbookMessagePasswordModal({
	isPasswordModalRequestedHandler,
	isProcessingHandler,
	isResultArrivedHandler,
	isFetchedProperlyHandler,
	messageId,
	isDarkmode,
}: props) {
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
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch();

	const fetchMessageDeleteAPI = () => {
		isPasswordModalRequestedHandler();
		isProcessingHandler(true);

		const deleteRequestMessageInfo = {
			messageId,
			password: passwordInputRef.current?.value,
		};

		fetch(`${process.env.REACT_APP_BACKEND_SERVER_ENDPOINT}/guestbook`, {
			method: 'delete',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(deleteRequestMessageInfo),
		})
			.then((res) => {
				setTimeout(() => {
					if (res.status === 200) {
						isProcessingHandler(false);
						isFetchedProperlyHandler(true);
						isResultArrivedHandler(true);
						setTimeout(() => {
							dispatch(messagesActions.deleteMessage(messageId));
						}, 1000);
					} else {
						isProcessingHandler(false);
						isFetchedProperlyHandler(false);
						isResultArrivedHandler(true);
					}
				}, 1500);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Fragment>
			<div
				id="guestbook-mesasge-password-request-modal"
				className={isDarkmode ? 'dark' : ''}
				onClick={(event) => {
					event.stopPropagation();
					if (event.target === event.currentTarget) {
						isPasswordModalRequestedHandler();
					}
				}}
			>
				<div id="guestbook-mesasge-password-request-modal-content-box" className={isDarkmode ? 'dark' : ''}>
					<div className="guestbook-mesasge-password-request-modal-password-request-text">Please input password</div>
					<div className="guestbook-mesasge-password-request-modal-password-request-input-box">
						<input
							className="guestbook-mesasge-password-request-modal-password-request-input"
							placeholder="Your password"
							ref={passwordInputRef}
						></input>
					</div>
					<div className="guestbook-mesasge-password-request-modal-icons-box">
						<div className="guestbook-mesasge-password-request-modal-icon-confirm" onClick={fetchMessageDeleteAPI}>
							Confirm
						</div>
						<div className="guestbook-mesasge-password-request-modal-icon-cancel" onClick={isPasswordModalRequestedHandler}>
							Cancel
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
