import { Fragment } from 'react';
import { HistoryPropsType } from '../../../../../variables/types';
import '../../../../../scss/About/History/HistoryBox/HistoryBox.scss';

export default function HistoryBoxKo(props: HistoryPropsType) {
	return (
		<Fragment>
			<div id="history-box" className={props.isDarkmode ? 'dark' : ''}>
				<div className="history-box-period">{props.history[0].period}</div>
				<div className="history-box-name">{props.history[0].name}</div>
				<div className="history-box-department">{props.history[0].department}</div>
				<div className="history-box-duty">{props.history[0].duty1}</div>
				<div className="history-box-duty">{props.history[0].duty2}</div>
				<div className="history-box-duty">{props.history[0].duty3}</div>
			</div>
		</Fragment>
	);
}
