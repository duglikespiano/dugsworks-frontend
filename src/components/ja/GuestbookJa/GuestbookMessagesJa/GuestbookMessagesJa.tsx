import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import GuestbookMessageJa from './GuestbookMessageJa/GuestbookMessageJa';
import { RootState, messagesSliceType } from '../../../../sliceStore';

export default function GuestbookMessagesJa() {
	const messagesList = useSelector((state: RootState) => state.messagesList);
	const sortedMessagesList: messagesSliceType[] | any = messagesList.slice();
	sortedMessagesList.sort(function (a: messagesSliceType, b: messagesSliceType) {
		if (a.id < b.id) return 1;
		if (a.id === b.id) return 0;
		if (a.id > b.id) return -1;
		return sortedMessagesList;
	});

	const resultMessagesLists = sortedMessagesList.map((item: messagesSliceType) => {
		const splittedDate = item.date.split(' ');
		const newDate = [splittedDate[0], splittedDate[1], splittedDate[2], splittedDate[3]].join(' ');
		const newItem = {
			...item,
			date: newDate,
		};
		return newItem;
	});

	return (
		<Fragment>
			{resultMessagesLists.map((item: messagesSliceType, i: number) => (
				<GuestbookMessageJa message={item} key={i} />
			))}
		</Fragment>
	);
}
