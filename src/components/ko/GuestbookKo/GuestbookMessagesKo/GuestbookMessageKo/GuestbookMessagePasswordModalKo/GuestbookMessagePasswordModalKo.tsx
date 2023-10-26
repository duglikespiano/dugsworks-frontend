import { useEffect, useRef, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { messagesActions } from '../../../../../../sliceStore';

import styles from './GuestbookMessagePasswordModalKo.module.scss';

interface props {
	isPasswordModalRequestedHandler: () => void;
	isProcessingHandler: (result: boolean) => void;
	isResultArrivedHandler: (result: boolean) => void;
	isFetchedProperlyHandler: (result: boolean) => void;
	messageId: number;
}

export default function GuestbookMessagePasswordModalKo({
	isPasswordModalRequestedHandler,
	isProcessingHandler,
	isResultArrivedHandler,
	isFetchedProperlyHandler,
	messageId,
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

		fetch(`${process.env.REACT_APP_BACKEND_SERVER_ENDPOINT}:${process.env.REACT_APP_BACKEND_SERVER_PORT}/guestbook`, {
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
						dispatch(messagesActions.deleteMessage(messageId));
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
				className={styles['guestbook-mesasge-password-request-modal']}
				onClick={(event) => {
					event.stopPropagation();
					if (event.target === event.currentTarget) {
						isPasswordModalRequestedHandler();
					}
				}}
			>
				<div className={styles['guestbook-mesasge-password-request-modal-content-box']}>
					<div className={styles['guestbook-mesasge-password-request-modal-password-request-text']}>비밀번호를 입력해주세요</div>
					<div className={styles['guestbook-mesasge-password-request-modal-password-request-input-box']}>
						<input
							className={styles['guestbook-mesasge-password-request-modal-password-request-input']}
							placeholder="비밀번호를 입력해주세요"
							ref={passwordInputRef}
						></input>
					</div>
					<div className={styles['guestbook-mesasge-password-request-modal-icons-box']}>
						<div className={styles['guestbook-mesasge-password-request-modal-icon-confirm']} onClick={fetchMessageDeleteAPI}>
							확인
						</div>
						<div
							className={styles['guestbook-mesasge-password-request-modal-icon-cancel']}
							onClick={isPasswordModalRequestedHandler}
						>
							취소
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
