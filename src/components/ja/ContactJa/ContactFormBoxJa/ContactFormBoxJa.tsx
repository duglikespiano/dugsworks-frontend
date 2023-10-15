import React, { useState, useRef } from 'react';
import ContactFormSubmitModalJa from './ContactFormSubmitModalJa/ContactFormSubmitModalJa';
import ContactFormContentsRequireComponentJa from './ContactFormContentsRequireComponentJa/ContactFormContentsRequireComponentJa';
import GuestbookInputFormModalJa from '../../GuestbookJa/GuestbookInputFormJa/GuestbookInputFormModalJa/GuestbookInputFormModalJa';
import styles from './ContactFormBoxJa.module.scss';

export default function ContactFormBoxJa() {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');

	const [nameTouched, setNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);

	const [isFormReady, setIsFormReady] = useState(true);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
			return;
		}

		if (isFormReady) {
			const contactInfoObject = {
				name: enteredName,
				email: enteredEmail,
				message: enteredMessage,
			};
			console.log(contactInfoObject);
			isFormSubmittedHandler(true);
			setEnteredName('');
			setEnteredEmail('');
			setEnteredMessage('');
			setNameTouched(false);
			setEmailTouched(false);
			setMessageTouched(false);
			setIsFormReady(true);
			return;
		}
	};

	return (
		<form className={styles['contact-form']} onSubmit={submitHandler}>
			{isFormSubmitted && (
				<ContactFormSubmitModalJa
					isFormSubmittedHandler={(boolean) => {
						setIsFormSubmitted(boolean);
					}}
				/>
			)}
			{!isFormReady && <GuestbookInputFormModalJa isFormFilledProperlyHandler={isFormReadyHandler} />}
			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>お名前</div>
				<input
					className={styles['contact-form-textinput']}
					type={'text'}
					id="name"
					maxLength={40}
					placeholder="お名前をご記入ください"
					onChange={nameInputChangeHandler}
					onBlur={() => {
						nameTouchedHandler(true);
					}}
					value={enteredName}
					ref={nameInputRef}
				/>
				{nameTouched && nameInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentJa />}
			</div>

			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>Eメール</div>
				<input
					className={styles['contact-form-textinput']}
					type={'email'}
					id="email"
					maxLength={40}
					placeholder="Eメールをご記入ください"
					onChange={emailInputChangeHandler}
					onBlur={() => {
						emailTouchedHandler(true);
					}}
					value={enteredEmail}
					ref={emailInputRef}
				/>
				{emailTouched && emailInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentJa />}
			</div>

			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>メッセージ</div>
				<textarea
					className={styles['contact-form-textarea']}
					id="message"
					maxLength={3000}
					placeholder="メッセージをご記入ください"
					onChange={messageInputChangeHandler}
					onBlur={() => {
						messageTouchedHandler(true);
					}}
					value={enteredMessage}
					ref={messageInputRef}
				/>
				{messageTouched && messageInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentJa />}
			</div>

			<div className={styles['contact-form-submit-button-box']}>
				<button className={styles['contact-form-submit-button']}>提出</button>
			</div>
		</form>
	);
}
