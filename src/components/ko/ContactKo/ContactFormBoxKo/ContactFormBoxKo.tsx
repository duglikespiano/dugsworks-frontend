import React, { useState, useRef } from 'react';
import ContactFormSubmitModalKo from './ContactFormSubmitModalKo/ContactFormSubmitModalKo';
import ContactFormContentsRequireComponentKo from './ContactFormContentsRequireComponentKo/ContactFormContentsRequireComponentKo';
import GuestbookInputFormModalKo from '../../GuestbookKo/GuestbookInputFormKo/GuestbookInputFormModalKo/GuestbookInputFormModalKo';
import styles from './ContactFormBoxKo.module.scss';

export default function ContactFormBoxKo() {
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
				<ContactFormSubmitModalKo
					isFormSubmittedHandler={(boolean) => {
						setIsFormSubmitted(boolean);
					}}
				/>
			)}
			{!isFormReady && <GuestbookInputFormModalKo isFormFilledProperlyHandler={isFormReadyHandler} />}
			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>성함</div>
				<input
					className={styles['contact-form-textinput']}
					type={'text'}
					id="name"
					maxLength={40}
					placeholder="성함을 입력해주세요"
					onChange={nameInputChangeHandler}
					onBlur={() => {
						nameTouchedHandler(true);
					}}
					value={enteredName}
					ref={nameInputRef}
				/>
				{nameTouched && nameInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentKo />}
			</div>

			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>이메일</div>
				<input
					className={styles['contact-form-textinput']}
					type={'email'}
					id="email"
					maxLength={40}
					placeholder="이메일을 입력해주세요"
					onChange={emailInputChangeHandler}
					onBlur={() => {
						emailTouchedHandler(true);
					}}
					value={enteredEmail}
					ref={emailInputRef}
				/>
				{emailTouched && emailInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentKo />}
			</div>

			<div className={styles['contact-form-elements-box']}>
				<div className={styles['contact-form-elements-title']}>메세지</div>
				<textarea
					className={styles['contact-form-textarea']}
					id="message"
					maxLength={3000}
					placeholder="메세지를 입력해주세요"
					onChange={messageInputChangeHandler}
					onBlur={() => {
						messageTouchedHandler(true);
					}}
					value={enteredMessage}
					ref={messageInputRef}
				/>
				{messageTouched && messageInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentKo />}
			</div>

			<div className={styles['contact-form-submit-button-box']}>
				<button className={styles['contact-form-submit-button']}>제출하기</button>
			</div>
		</form>
	);
}
