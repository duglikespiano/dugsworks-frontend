import { useState, Fragment } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { messagesSlicePropsType } from '../../../../../sliceStore';
import ProcessingModalKo from '../../../shared/ProcessingModal/ProcessingModal';
import GuestbookMessagePasswordModalKo from './GuestbookMessagePasswordModal/GuestbookMessagePasswordModal';
import GuestbookMessageFetchResultModalKo from './GuestbookMessageFetchResultModal/GuestbookMessageFetchResultModal';

import styles from './GuestbookMessageKo.module.scss';

export default function GuestbookMessageKo({ message }: messagesSlicePropsType) {
	const [isPasswordModalRequested, setIsPaswordModalRequested] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const [isResultArrived, setIsResultArrived] = useState(false);
	const [isFetchedProperly, setIsFetchedProperly] = useState(false);

	const isPasswordModalRequestedHandler = () => {
		setIsPaswordModalRequested(!isPasswordModalRequested);
	};

	const isProcessingHandler = (boolean: boolean) => {
		setIsProcessing(boolean);
	};

	const isResultArrivedHandler = () => {
		setIsResultArrived(!isResultArrived);
	};

	const isFetchedProperlyHandler = (result: boolean) => {
		setIsFetchedProperly(result);
	};

	return (
		<Fragment>
			{isPasswordModalRequested && (
				<GuestbookMessagePasswordModalKo
					isPasswordModalRequestedHandler={isPasswordModalRequestedHandler}
					isProcessingHandler={(isProcessing) => isProcessingHandler(isProcessing)}
					isResultArrivedHandler={isResultArrivedHandler}
					isFetchedProperlyHandler={(result) => isFetchedProperlyHandler(result)}
					messageId={message.id}
				/>
			)}
			{isProcessing && <ProcessingModalKo />}
			{isResultArrived && (
				<GuestbookMessageFetchResultModalKo
					isFetchedProperly={isFetchedProperly}
					isResultArrivedHandler={isResultArrivedHandler}
				/>
			)}
			<div className={styles['guestbook-message-box']}>
				<div className={styles['guestbook-message-delete-icon']} onClick={isPasswordModalRequestedHandler}>
					<RiDeleteBin6Line />{' '}
				</div>
				<div className={styles['guestbook-message-writer-date-box']}>
					<div className={styles['guestbook-message-writer']}>{message.name}</div>
					<div className={styles['guestbook-message-date']}>{message.created_at}</div>
				</div>
				<div className={styles['guestbook-message-text']}>{message.message}</div>
			</div>
		</Fragment>
	);
}
