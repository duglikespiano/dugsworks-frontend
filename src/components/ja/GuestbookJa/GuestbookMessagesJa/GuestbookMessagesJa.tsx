import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GuestbookMessageJa from './GuestbookMessageJa/GuestbookMessageJa';
import { RootState, messagesSliceType, fetchedMessagesType, messagesActions } from '../../../../sliceStore';

export default function GuestbookMessagesJa() {
	const [isReadyToFetch, setIsReadyToFetch] = useState(true);

	const messagesList = useSelector((state: RootState) => state.messagesList);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isReadyToFetch) {
			fetch(`${process.env.REACT_APP_BACKEND_SERVER_ENDPOINT}:${process.env.REACT_APP_BACKEND_SERVER_PORT}/guestbook`)
				.then((res) => res.json())
				.then(({ data }) => {
					data.map((item: fetchedMessagesType) => {
						if (typeof item.created_at === 'string') {
							let year = item.created_at.split('-')[0] + '年';
							let month = item.created_at.split('-')[1];
							let day = item.created_at.split('-')[2].slice(0, 2) + '日';
							let time: number | string = parseInt(item.created_at.split('-')[2].slice(3, 5));
							let minutes = item.created_at.split('-')[2].slice(6, 8);

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
							} else if (time === 11 || time === 10) {
								time = '午前 ' + time.toString();
							} else if (time === 0) {
								time = '午前 00';
							} else {
								time = '午前 0' + time.toString();
							}

							const convertedDate = `${year} ${month} ${day}、 ${time}:${minutes}`;

							return (item.created_at = convertedDate);
						} else {
							return item;
						}
					});

					dispatch(messagesActions.resetMessages());

					data.forEach((item: messagesSliceType) => {
						dispatch(messagesActions.addMessage(item));
					});
				})
				.catch((error) => console.error(error));
		}
		return () => {
			setIsReadyToFetch(false);
		};
	}, [dispatch, isReadyToFetch]);

	return (
		<Fragment>
			{messagesList.map((item: messagesSliceType, i: number) => (
				<GuestbookMessageJa message={item} key={i} />
			))}
		</Fragment>
	);
}
