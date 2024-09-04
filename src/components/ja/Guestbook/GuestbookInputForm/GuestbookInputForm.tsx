import { useState, useRef, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import GuestbookInputFormModal from './GuestbookInputFormModal/GuestbookInputFormModal';
import ContactFormContentsRequireComponent from '../../Contact/ContactFormBox/ContactFormContentsRequireComponent/ContactFormContentsRequireComponent';
import { messagesActions } from '../../../../variables/sliceStore';
import '../../../../scss/Guestbook/GuestbookInputForm/GuestbookInputForm.scss';

export default function GuestbookInputForm(props: { isDarkmode: boolean }) {
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
				let year = messageObjectForUnshift.created_at.split('-')[0] + '年';
				let month = messageObjectForUnshift.created_at.split('-')[1];
				let day = messageObjectForUnshift.created_at.split('-')[2].slice(0, 2) + '日';
				let time: number | string = parseInt(messageObjectForUnshift.created_at.split('-')[2].slice(3, 5));
				let minutes = messageObjectForUnshift.created_at.split('-')[2].slice(6, 8);

				if (month === '01') {
					month = '1月';
				} else if (month === '02') {
					month = '2月';
				} else if (month === '03') {
					month = '3月';
				} else if (month === '04') {
					month = '4月';
				} else if (month === '05') {
					month = '5月';
				} else if (month === '06') {
					month = '6月';
				} else if (month === '07') {
					month = '7月';
				} else if (month === '08') {
					month = '8月';
				} else if (month === '09') {
					month = '9月';
				} else if (month === '10') {
					month = '10月';
				} else if (month === '11') {
					month = '11月';
				} else {
					month = '12月';
				}

				if (time > 12) {
					time = (time - 12).toString();
					if (time === '11' || time === '10') {
						time = `午後 ${time}`;
					} else {
						time = `午後 0${time}`;
					}
				} else if (time === 12) {
					time = `午後 ${time}`;
				} else if (time === 11 || time === 10) {
					time = '午前 ' + time.toString();
				} else if (time === 0) {
					time = '午前 00';
				} else {
					time = '午前 0' + time.toString();
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
			{!isFormFilledProperly && <GuestbookInputFormModal isFormFilledProperlyHandler={isFormFilledProperlyHandler} />}
			<form id="guestbook-input-form" className={props.isDarkmode ? 'dark' : ''} onSubmit={submitHandler}>
				<div className="guestbook-form-name-password-box">
					<div className="guestbook-form-name-box">
						<div className="guestbook-form-elements-title">お名前</div>
						<input
							className="guestbook-form-textinput"
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
						{nameTouched && nameInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponent />}
					</div>

					<div className="guestbook-form-password-box">
						<div className="guestbook-form-elements-title">パスワード</div>
						<input
							className="guestbook-form-textinput"
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
						{passwordTouched && passwordInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponent />}
					</div>
				</div>

				<div className="guestbook-form-elements-box">
					<div className="guestbook-form-elements-title">メッセージ</div>
					<textarea
						className="guestbook-form-textarea"
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
					{messageTouched && messageInputRef.current?.value.trim() === '' && <ContactFormContentsRequireComponent />}
				</div>

				<div className="guestbook-form-submit-button-box">
					<button className="guestbook-form-submit-button">提出</button>
				</div>
			</form>
		</Fragment>
	);
}
