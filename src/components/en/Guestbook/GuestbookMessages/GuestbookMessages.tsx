import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GuestbookMessageEn from './GuestbookMessage/GuestbookMessage';
import { RootState, messagesSliceType, fetchedMessagesType, messagesActions } from '../../../../variables/sliceStore';

export default function GuestbookMessagesEn() {
	const [isReadyToFetch, setIsReadyToFetch] = useState(true);

	const messagesList = useSelector((state: RootState) => state.messagesList);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isReadyToFetch) {
			fetch(`${process.env.REACT_APP_BACKEND_SERVER_ENDPOINT}/guestbook`)
				.then((res) => res.json())
				.then(({ data }) => {
					data.map((item: fetchedMessagesType) => {
						if (typeof item.created_at === 'string') {
							let year = item.created_at.split('-')[0];
							let month = item.created_at.split('-')[1];
							let day = item.created_at.split('-')[2].slice(0, 2);
							let time: number | string = parseInt(item.created_at.split('-')[2].slice(3, 5));
							let minutes = item.created_at.split('-')[2].slice(6, 8);

							if (month === '01') {
								month = 'January';
							} else if (month === '02') {
								month = 'February';
							} else if (month === '03') {
								month = 'March';
							} else if (month === '04') {
								month = 'April';
							} else if (month === '05') {
								month = 'May';
							} else if (month === '06') {
								month = 'June';
							} else if (month === '07') {
								month = 'July';
							} else if (month === '08') {
								month = 'August';
							} else if (month === '09') {
								month = 'September';
							} else if (month === '10') {
								month = 'October';
							} else if (month === '11') {
								month = 'November';
							} else {
								month = 'December';
							}

							if (time > 12) {
								time = (time - 12).toString();
								if (time === '11' || time === '10') {
									time = `pm ${time}`;
								} else {
									time = `pm 0${time}`;
								}
							} else if (time === 12) {
								time = `pm ${time}`;
							} else if (time === 11 || time === 10) {
								time = 'am ' + time.toString();
							} else if (time === 0) {
								time = 'am 00';
							} else {
								time = 'am 0' + time.toString();
							}

							const convertedDate = `${month} ${day}, ${year}, ${time}:${minutes}`;

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
				<GuestbookMessageEn message={item} key={i} />
			))}
		</Fragment>
	);
}
