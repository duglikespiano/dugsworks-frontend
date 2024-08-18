import { Fragment } from 'react';
import { HistoryPropsType } from '../../../../../variables/types';
import '../../../../../scss/About/History/HistoryBox/HistoryBox.scss';

export default function HistoryBox(props: HistoryPropsType) {
	return (
		<Fragment>
			<div id="history-box">
				<div className="history-box-period">{props.history[2].period}</div>
				<div className="history-box-name">{props.history[2].name}</div>
				<div className="history-box-department">{props.history[2].department}</div>
				<div className="history-box-duty">{props.history[2].duty1}</div>
				<div className="history-box-duty">{props.history[2].duty2}</div>
				<div className="history-box-duty">{props.history[2].duty3}</div>
			</div>
		</Fragment>
	);
}
