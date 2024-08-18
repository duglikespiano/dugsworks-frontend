import { Fragment } from 'react';
import { HistoryPropsType } from '../../../../../variables/types';
import '../../../../../scss/About/History/HistoryBox/HistoryBox.scss';

export default function HistoryBox(props: HistoryPropsType) {
	return (
		<Fragment>
			<div id="history-box">
				<div className="history-box-period">{props.history[1].period}</div>
				<div className="history-box-name">{props.history[1].name}</div>
				<div className="history-box-department">{props.history[1].department}</div>
				<div className="history-box-duty">{props.history[1].duty1}</div>
				<div className="history-box-duty">{props.history[1].duty2}</div>
				<div className="history-box-duty">{props.history[1].duty3}</div>
			</div>
		</Fragment>
	);
}
