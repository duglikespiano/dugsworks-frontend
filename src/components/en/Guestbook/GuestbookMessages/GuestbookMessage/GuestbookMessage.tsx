import { useState, Fragment } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { messagesSlicePropsType } from '../../../../../variables/sliceStore';
import ProcessingModal from '../../../common/ProcessingModal/ProcessingModal';
import GuestbookMessagePasswordModal from './GuestbookMessagePasswordModal/GuestbookMessagePasswordModal';
import GuestbookMessageFetchResultModal from './GuestbookMessageFetchResultModal/GuestbookMessageFetchResultModal';
import '../../../../../scss/Guestbook/GuestbookMessages/GuestbookMessage/GuestbookMessage.scss';

export default function GuestbookMessage({ message }: messagesSlicePropsType, isDarkmode: boolean) {
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
				<GuestbookMessagePasswordModal
					isPasswordModalRequestedHandler={isPasswordModalRequestedHandler}
					isProcessingHandler={(isProcessing) => isProcessingHandler(isProcessing)}
					isResultArrivedHandler={isResultArrivedHandler}
					isFetchedProperlyHandler={(result) => isFetchedProperlyHandler(result)}
					messageId={message.id}
				/>
			)}
			{isProcessing && <ProcessingModal isDarkmode={isDarkmode} />}
			{isResultArrived && (
				<GuestbookMessageFetchResultModal isFetchedProperly={isFetchedProperly} isResultArrivedHandler={isResultArrivedHandler} />
			)}
			<div id="guestbook-message-box">
				<div className="guestbook-message-delete-icon" onClick={isPasswordModalRequestedHandler}>
					<RiDeleteBin6Line />{' '}
				</div>
				<div className="guestbook-message-writer-date-box">
					<div className="guestbook-message-writer">{message.name}</div>
					<div className="guestbook-message-date">{message.created_at}</div>
				</div>
				<div className="guestbook-message-text">{message.message}</div>
			</div>
		</Fragment>
	);
}
