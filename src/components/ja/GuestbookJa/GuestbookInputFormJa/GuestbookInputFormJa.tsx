import { useState, useRef, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GuestbookInputFormModalJa from './GuestbookInputFormModalJa/GuestbookInputFormModalJa';
import ContactFormContentsRequireComponentJa from '../../ContactJa/ContactFormBoxJa/ContactFormContentsRequireComponentJa/ContactFormContentsRequireComponentJa';
import { messagesActions, RootState } from '../../../../sliceStore';
import styles from './GuestbookInputFormJa.module.scss';

export default function GuestbookInputFormKo() {
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

	const [nameTouched, setNameTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);

	const [isFormFilledProperly, setIsFormFilledProperly] = useState(true);

	const nameInputRef = useRef<HTMLInputElement>(null);
	const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (nameInputRef.current) {
			setEnteredName(nameInputRef.current.value);
			setNameTouched(true);
		}
	};

	const passwordInputRef = useRef<HTMLInputElement>(null);
	const passwordInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (passwordInputRef.current) {
			setEnteredPassword(passwordInputRef.current.value);
			setPasswordTouched(true);
		}
	};

	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const messageInputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (messageInputRef.current) {
			setEnteredMessage(messageInputRef.current.value);
			setMessageTouched(true);
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

	const nameTouchedHandler = (boolean: boolean) => {
		setNameTouched(boolean);
	};

	const passwordTouchedHandler = (boolean: boolean) => {
		setPasswordTouched(boolean);
	};

	const messageTouchedHandler = (boolean: boolean) => {
		setMessageTouched(boolean);
	};

	const isFormFilledProperlyHandler = () => {
		setIsFormFilledProperly(!isFormFilledProperly);
	};

	return (
		<Fragment>
			{!isFormFilledProperly && <GuestbookInputFormModalJa isFormFilledProperlyHandler={isFormFilledProperlyHandler} />}
			<form className={styles['guestbook-input-form']} onSubmit={submitHandler}>
				<div className={styles['guestbook-form-name-password-box']}>
					<div className={styles['guestbook-form-name-box']}>
						<div className={styles['guestbook-form-elements-title']}>お名前</div>
						<input
							className={styles['guestbook-form-textinput']}
							type={'text'}
							id="name"
							maxLength={30}
							placeholder="お名前をご入力してください"
							onChange={nameInputChangeHandler}
							onBlur={() => {
								nameTouchedHandler(true);
							}}
							value={enteredName}
							ref={nameInputRef}
						/>
						{nameTouched && nameInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentJa />}
					</div>

					<div className={styles['guestbook-form-password-box']}>
						<div className={styles['guestbook-form-elements-title']}>パスワード</div>
						<input
							className={styles['guestbook-form-textinput']}
							type={'password'}
							id="password"
							maxLength={30}
							placeholder="パスワードをご入力してください"
							onChange={passwordInputChangeHandler}
							onBlur={() => {
								passwordTouchedHandler(true);
							}}
							value={enteredPassword}
							ref={passwordInputRef}
						/>
						{passwordTouched && passwordInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentJa />}
					</div>
				</div>

				<div className={styles['guestbook-form-elements-box']}>
					<div className={styles['guestbook-form-elements-title']}>メッセージ</div>
					<textarea
						className={styles['guestbook-form-textarea']}
						id="message"
						maxLength={500}
						placeholder={'メッセージをご入力ください'}
						onChange={messageInputChangeHandler}
						onBlur={() => {
							messageTouchedHandler(true);
						}}
						value={enteredMessage}
						ref={messageInputRef}
					/>
					{messageTouched && messageInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentJa />}
				</div>

				<div className={styles['guestbook-form-submit-button-box']}>
					<button className={styles['guestbook-form-submit-button']}>提出</button>
				</div>
			</form>
		</Fragment>
	);
}
