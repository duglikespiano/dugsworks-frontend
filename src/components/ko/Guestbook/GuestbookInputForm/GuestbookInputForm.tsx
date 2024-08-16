import { useState, useRef, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import GuestbookInputFormModalKo from './GuestbookInputFormModal/GuestbookInputFormModal';
import ContactFormContentsRequireComponentKo from '../../Contact/ContactFormBox/ContactFormContentsRequireComponent/ContactFormContentsRequireComponent';
import { messagesActions } from '../../../../sliceStore';
import styles from './GuestbookInputFormKo.module.scss';

export default function GuestbookInputFormKo() {
	const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

	class Message {
		id?: number;
		name: string;
		password: string;
		message: string;

		constructor(name: string, password: string, message: string) {
			this.name = name;
			this.password = password;
			this.message = message;
		}
	}

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
			const messageObjectForUnshift = { ...newMessage, created_at: new Date(new Date().getTime() + KR_TIME_DIFF).toISOString() };
			if (typeof messageObjectForUnshift.created_at === 'string') {
				let year = messageObjectForUnshift.created_at.split('-')[0] + '년';
				let month = messageObjectForUnshift.created_at.split('-')[1];
				let day = messageObjectForUnshift.created_at.split('-')[2].slice(0, 2) + '일';
				let time: number | string = parseInt(messageObjectForUnshift.created_at.split('-')[2].slice(3, 5));
				let minutes = messageObjectForUnshift.created_at.split('-')[2].slice(6, 8);

				if (month === '01') {
					month = '1월';
				} else if (month === '02') {
					month = '2월';
				} else if (month === '03') {
					month = '3월';
				} else if (month === '04') {
					month = '4월';
				} else if (month === '05') {
					month = '5월';
				} else if (month === '06') {
					month = '6월';
				} else if (month === '07') {
					month = '7월';
				} else if (month === '08') {
					month = '8월';
				} else if (month === '09') {
					month = '9월';
				} else if (month === '10') {
					month = '10월';
				} else if (month === '11') {
					month = '11월';
				} else {
					month = '12월';
				}

				if (time > 12) {
					time = (time - 12).toString();
					if (time === '11' || time === '10') {
						time = `오후 ${time}`;
					} else {
						time = `오후 0${time}`;
					}
				} else if (time === 12) {
					time = `오후 ${time}`;
				} else if (time === 11 || time === 10) {
					time = '오전 ' + time.toString();
				} else if (time === 0) {
					time = '오전 00';
				} else {
					time = '오전 0' + time.toString();
				}

				const convertedDate = `${year} ${month} ${day}, ${time}:${minutes}`;
				messageObjectForUnshift.created_at = convertedDate;
			}

			fetch(`${process.env.REACT_APP_BACKEND_SERVER_ENDPOINT}/guestbook`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newMessage),
			})
				.then((res) => res.json())
				.then((data) => {
					messageObjectForUnshift.id = data.messageId;
					dispatch(messagesActions.addMessage(JSON.stringify(messageObjectForUnshift)));
				})
				.catch((error) => console.error(error))
				.finally(() => {
					setEnteredName('');
					setEnteredPassword('');
					setEnteredMessage('');
					setNameTouched(false);
					setPasswordTouched(false);
					setMessageTouched(false);
				});
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
			{!isFormFilledProperly && <GuestbookInputFormModalKo isFormFilledProperlyHandler={isFormFilledProperlyHandler} />}
			<form className={styles['guestbook-input-form']} onSubmit={submitHandler}>
				<div className={styles['guestbook-form-name-password-box']}>
					<div className={styles['guestbook-form-name-box']}>
						<div className={styles['guestbook-form-elements-title']}>성함</div>
						<input
							className={styles['guestbook-form-textinput']}
							type={'text'}
							id="name"
							maxLength={30}
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

					<div className={styles['guestbook-form-password-box']}>
						<div className={styles['guestbook-form-elements-title']}>비밀번호</div>
						<input
							className={styles['guestbook-form-textinput']}
							type={'password'}
							id="password"
							maxLength={30}
							placeholder="비밀번호를 입력해주세요"
							onChange={passwordInputChangeHandler}
							onBlur={() => {
								passwordTouchedHandler(true);
							}}
							value={enteredPassword}
							ref={passwordInputRef}
						/>
						{passwordTouched && passwordInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentKo />}
					</div>
				</div>

				<div className={styles['guestbook-form-elements-box']}>
					<div className={styles['guestbook-form-elements-title']}>메세지</div>
					<textarea
						className={styles['guestbook-form-textarea']}
						id="message"
						maxLength={500}
						placeholder={'메세지를 입력해주세요'}
						onChange={messageInputChangeHandler}
						onBlur={() => {
							messageTouchedHandler(true);
						}}
						value={enteredMessage}
						ref={messageInputRef}
					/>
					{messageTouched && messageInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponentKo />}
				</div>

				<div className={styles['guestbook-form-submit-button-box']}>
					<button className={styles['guestbook-form-submit-button']}>제출하기</button>
				</div>
			</form>
		</Fragment>
	);
}
