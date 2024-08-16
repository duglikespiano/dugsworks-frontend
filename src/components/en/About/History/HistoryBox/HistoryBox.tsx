import { Fragment } from 'react';
import './HistoryBox.scss';
import { HistoryPropsType } from '../../../../../variables/types';

export default function HistoryBoxKo(props: HistoryPropsType) {
	return (
		<Fragment>
			<div id="history-box">
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
