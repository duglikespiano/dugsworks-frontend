import React, { useState, useRef } from 'react';
import ContactFormSubmitModalEn from './ContactFormSubmitModalEn/ContactFormSubmitModalEn';
import ContactFormContentsRequireComponentEn from './ContactFormContentsRequireComponentEn/ContactFormContentsRequireComponentEn';
import ProcessingModalEn from '../../shared/ProcessingModalEn/ProcessingModalEn';
import GuestbookInputFormModalEn from '../../GuestbookEn/GuestbookInputFormEn/GuestbookInputFormModalEn/GuestbookInputFormModalEn';
import styles from './ContactFormBoxEn.module.scss';

export default function ContactFormBoxEn() {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');

	const [nameTouched, setNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);

	const [isFormReady, setIsFormReady] = useState(true);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const [isProcessdProperly, setIsProcessdProperly] = useState(true);

	const nameInputRef = useRef<HTMLInputElement>(null);
	const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (nameInputRef.current) {
			setEnteredName(nameInputRef.current.value);
			setNameTouched(true);
		}
	};

	const emailInputRef = useRef<HTMLInputElement>(null);
	const emailInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (emailInputRef.current) {
			setEnteredEmail(emailInputRef.current.value.toLowerCase());
			setEmailTouched(true);
		}
	};

	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const messageInputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (messageInputRef.current) {
			setEnteredMessage(messageInputRef.current.value);
			setMessageTouched(true);
		}
	};

	const nameTouchedHandler = (boolean: boolean) => {
		setNameTouched(boolean);
	};

	const emailTouchedHandler = (boolean: boolean) => {
		setEmailTouched(boolean);
	};

	const messageTouchedHandler = (boolean: boolean) => {
		setMessageTouched(boolean);
	};

	const isFormReadyHandler = () => {
		setIsFormReady(!isFormReady);
	};

	const isFormSubmittedHandler = (boolean: boolean) => {
		setIsFormSubmitted(boolean);
	};

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (
			nameInputRef.current!.value.trim() === '' ||
			emailInputRef.current!.value.trim() === '' ||
			messageInputRef.current!.value.trim() === ''
		) {
			setIsFormReady(false);
			setNameTouched(true);
			setEmailTouched(true);
			setMessageTouched(true);
			return;
		} else {
			if (isFormReady) {
				setIsProcessing(true);

				const contactInfoMailObject: contactInfoMailObjectType = {
					name: enteredName,
					email: enteredEmail,
					message: enteredMessage,
				};

				requestToSendContactMail(contactInfoMailObject);
				return;
			}
		}
	};

	interface contactInfoMailObjectType {
		name: string;
		email: string;
		message: string;
	}

	const formSubmitResultToComponent = (boolean: boolean) => {
		setIsProcessing(false);
		isFormSubmittedHandler(true);
		setIsFormReady(true);
		setIsProcessdProperly(boolean);
	};

	const resetForm = () => {
		setEnteredName('');
		setEnteredEmail('');
		setEnteredMessage('');
		setNameTouched(false);
		setEmailTouched(false);
		setMessageTouched(false);
		setIsFormReady(true);
	};

	const requestToSendContactMail = async (mailObj: contactInfoMailObjectType) => {
		try {
			const fetchedResult = await fetch(
				`${process.env.REACT_APP_BACKEND_ENDPOINT}:${process.env.REACT_APP_BACKEND_PORT}/mail/contact`,
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(mailObj),
				}
			);
			const parsedFetchedResult = await fetchedResult.json();
			if (fetchedResult.status !== 200) {
				throw new Error(parsedFetchedResult.error);
			} else {
				formSubmitResultToComponent(true);
			}
		} catch (error) {
			console.log(error);
			formSubmitResultToComponent(false);
		} finally {
			resetForm();
		}
	};

	return (
		<form className={styles['contact-form']} onSubmit={submitHandler}>
			{isProcessing && <ProcessingModalEn />}
			{isFormSubmitted && (
				<ContactFormSubmitModalEn
					isFormSubmittedHandler={(boolean) => {
						setIsFormSubmitted(boolean);
					}}
					isProcessdProperly={isProcessdProperly}
				/>
			)}
			{!isFormReady && <GuestbookInputFormModalEn isFormFilledProperlyHandler={isFormReadyHandler} />}
			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>Name</div>
				<input
					className={styles['contact-form-textinput']}
					type={'text'}
					id="name"
					maxLength={40}
					placeholder="Your name"
					onChange={nameInputChangeHandler}
					onBlur={() => {
						nameTouchedHandler(true);
					}}
					value={enteredName}
					ref={nameInputRef}
				/>
				{nameTouched && nameInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentEn />}
			</div>

			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>Email</div>
				<input
					className={styles['contact-form-textinput']}
					type={'email'}
					id="email"
					maxLength={40}
					placeholder="Your email"
					onChange={emailInputChangeHandler}
					onBlur={() => {
						emailTouchedHandler(true);
					}}
					value={enteredEmail}
					ref={emailInputRef}
				/>
				{emailTouched && emailInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentEn />}
			</div>

			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>Message</div>
				<textarea
					className={styles['contact-form-textarea']}
					id="message"
					maxLength={3000}
					placeholder={'Your Message'}
					onChange={messageInputChangeHandler}
					onBlur={() => {
						messageTouchedHandler(true);
					}}
					value={enteredMessage}
					ref={messageInputRef}
				/>
				{messageTouched && messageInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentEn />}
			</div>

			<div className={styles['contact-form-submit-button-box']}>
				<button className={styles['contact-form-submit-button']}>Submit</button>
			</div>
		</form>
	);
}
