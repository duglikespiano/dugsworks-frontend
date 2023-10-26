import { useEffect, useRef, Fragment } from 'react';

import styles from './GuestbookMessagePasswordModalEn.module.scss';

interface props {
	isPasswordModalRequestedHandler: () => void;
	isProcessingHandler: (result: boolean) => void;
	isResultArrivedHandler: () => void;
	isFetchedProperlyHandler: (result: boolean) => void;
	messageId: number;
}

export default function GuestbookMessagePasswordModalEn({
	isPasswordModalRequestedHandler,
	isProcessingHandler,
	isResultArrivedHandler,
	isFetchedProperlyHandler,
	messageId,
}: props) {
	const passwordInputRef = useRef<HTMLInputElement>(null);
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

	const fetchMessageDeleteAPI = () => {
		isPasswordModalRequestedHandler();
		isProcessingHandler(true);

		const deleteRequestMessageInfo = {
			messageId,
			password: passwordInputRef.current?.value,
		};

		fetch(`${process.env.REACT_APP_BACKEND_SERVER_ENDPOINT}:${process.env.REACT_APP_BACKEND_SERVER_PORT}/guestbook`, {
			method: 'delete',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(deleteRequestMessageInfo),
		})
			.then((res) => {
				isProcessingHandler(true);
				setTimeout(() => {
					if (res.status === 200) {
						isProcessingHandler(false);
						isResultArrivedHandler();
						isFetchedProperlyHandler(true);
					} else {
						isProcessingHandler(false);
						isResultArrivedHandler();
						isFetchedProperlyHandler(false);
					}
				}, 1500);
				return res.json();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Fragment>
			<div
				className={styles['guestbook-mesasge-password-request-modal']}
				onClick={(event) => {
					event.stopPropagation();
					if (event.target === event.currentTarget) {
						isPasswordModalRequestedHandler();
					}
				}}
			>
				<div className={styles['guestbook-mesasge-password-request-modal-content-box']}>
					<div className={styles['guestbook-mesasge-password-request-modal-password-request-text']}>Please input password</div>
					<div className={styles['guestbook-mesasge-password-request-modal-password-request-input-box']}>
						<input
							className={styles['guestbook-mesasge-password-request-modal-password-request-input']}
							placeholder="Your password"
							ref={passwordInputRef}
						></input>
					</div>
					<div className={styles['guestbook-mesasge-password-request-modal-icons-box']}>
						<div className={styles['guestbook-mesasge-password-request-modal-icon-confirm']} onClick={fetchMessageDeleteAPI}>
							Confirm
						</div>
						<div
							className={styles['guestbook-mesasge-password-request-modal-icon-cancel']}
							onClick={isPasswordModalRequestedHandler}
						>
							Cancel
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
