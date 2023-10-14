import { useState, useRef, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GuestbookInputFormModalEn from './GuestbookInputFormModalEn/GuestbookInputFormModalEn';
import { messagesActions, RootState } from '../../../../sliceStore';
import styles from './GuestbookInputFormEn.module.scss';

export default function GuestbookInputFormEn() {
	class Message {
		id: number;
		writer: string;
		password: string;
		message: string;
		date: string;

		constructor(writer: string, password: string, message: string) {
			let id: number = 0;
			messagesList.forEach((item) => {
				if (item.id > id) {
					id = item.id;
				}
			});
			this.id = id + 1;
			this.writer = writer;
			this.password = password;
			this.message = message;
			this.date = new Date().toString();
		}
	}

	const messagesList = useSelector((state: RootState) => state.messagesList);
	const dispatch = useDispatch();

	const [enteredName, setEnteredName] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [isFormFilledProperly, setIsFormFilledProperly] = useState(true);

	const nameInputRef = useRef<HTMLInputElement>(null);
	const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (nameInputRef.current) {
			setEnteredName(nameInputRef.current.value);
		}
	};

	const passwordInputRef = useRef<HTMLInputElement>(null);
	const passwordInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (passwordInputRef.current) {
			setEnteredPassword(passwordInputRef.current.value.toLowerCase());
		}
	};

	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const messageInputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (messageInputRef.current) {
			setEnteredMessage(messageInputRef.current.value);
		}
	};

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newMessage = new Message(enteredName, enteredPassword, enteredMessage);
		if (enteredName.trim().length === 0 || enteredPassword.trim().length === 0 || enteredMessage.trim().length === 0) {
			isFormFilledProperlyHandler();
		} else {
			dispatch(messagesActions.addMessage(JSON.stringify(newMessage)));
			setEnteredName('');
			setEnteredPassword('');
			setEnteredMessage('');
		}
	};

	const isFormFilledProperlyHandler = () => {
		setIsFormFilledProperly(!isFormFilledProperly);
	};

	return (
		<Fragment>
			{!isFormFilledProperly && <GuestbookInputFormModalEn isFormFilledProperlyHandler={isFormFilledProperlyHandler} />}
			<form className={styles['guestbook-input-form']} onSubmit={submitHandler}>
				<div className={styles['guestbook-form-name-password-box']}>
					<div className={styles['guestbook-form-name-box']}>
						<div className={styles['guestbook-form-elements-title']}>Name</div>
						<input
							className={styles['guestbook-form-textinput']}
							type={'text'}
							id="name"
							maxLength={30}
							placeholder="Your name"
							onChange={nameInputChangeHandler}
							value={enteredName}
							ref={nameInputRef}
						/>
					</div>

					<div className={styles['guestbook-form-password-box']}>
						<div className={styles['guestbook-form-elements-title']}>Password</div>
						<input
							className={styles['guestbook-form-textinput']}
							type={'password'}
							id="password"
							maxLength={30}
							placeholder="Your password"
							onChange={passwordInputChangeHandler}
							value={enteredPassword}
							ref={passwordInputRef}
						/>
					</div>
				</div>
				<div className={styles['guestbook-form-elements-box']}>
					<div className={styles['guestbook-form-elements-title']}>Message</div>
					<textarea
						className={styles['guestbook-form-textarea']}
						id="message"
						maxLength={500}
						placeholder={'Your Message'}
						onChange={messageInputChangeHandler}
						value={enteredMessage}
						ref={messageInputRef}
					/>
				</div>

				<div className={styles['guestbook-form-submit-button-box']}>
					<button className={styles['guestbook-form-submit-button']}>Submit</button>
				</div>
			</form>
		</Fragment>
	);
}
