import { useState, Fragment } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { messagesSlicePropsType } from '../../../../../sliceStore';
import ProcessingModalEn from '../../../shared/ProcessingModalEn/ProcessingModalEn';
import GuestbookMessagePasswordModalEn from './GuestbookMessagePasswordModalEn/GuestbookMessagePasswordModalEn';
import GuestbookMessageFetchResultModalEn from './GuestbookMessageFetchResultModalEn/GuestbookMessageFetchResultModalEn';

import styles from './GuestbookMessageEn.module.scss';

export default function GuestbookMessageEn({ message }: messagesSlicePropsType) {
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
				<GuestbookMessagePasswordModalEn
					isPasswordModalRequestedHandler={isPasswordModalRequestedHandler}
					isProcessingHandler={(isProcessing) => isProcessingHandler(isProcessing)}
					isResultArrivedHandler={isResultArrivedHandler}
					isFetchedProperlyHandler={(result) => isFetchedProperlyHandler(result)}
					messageId={message.id}
				/>
			)}
			{isProcessing && <ProcessingModalEn />}
			{isResultArrived && (
				<GuestbookMessageFetchResultModalEn
					isFetchedProperly={isFetchedProperly}
					isResultArrivedHandler={isResultArrivedHandler}
				/>
			)}
			<div className={styles['guestbook-message-box']}>
				<div className={styles['guestbook-message-delete-icon']} onClick={isPasswordModalRequestedHandler}>
					<RiDeleteBin6Line />{' '}
				</div>
				<div className={styles['guestbook-message-writer-date-box']}>
					<div className={styles['guestbook-message-writer']}>{message.name}di</div>
					<div className={styles['guestbook-message-date']}>{message.created_at}</div>
				</div>
				<div className={styles['guestbook-message-text']}>{message.message}</div>
			</div>
		</Fragment>
	);
}
