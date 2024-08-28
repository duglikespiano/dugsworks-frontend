import { Fragment } from 'react';
import HistoryBox from './HistoryBox/HistoryBox';
import {
	afterHistory,
	bootCampHistory,
	secondCompanyHistory,
	firstCompanyHistory,
	schoolHistory,
} from '../../../../variables/variables';
import '../../../../scss/About/History/History.scss';

export default function History(props: { isDarkmode: boolean }) {
	return (
		<Fragment>
			<div id="history">
				<div className="history-title">약력</div>
				<HistoryBox history={afterHistory} isDarkmode={props.isDarkmode} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={bootCampHistory} isDarkmode={props.isDarkmode} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={secondCompanyHistory} isDarkmode={props.isDarkmode} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={firstCompanyHistory} isDarkmode={props.isDarkmode} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={schoolHistory} isDarkmode={props.isDarkmode} />
			</div>
		</Fragment>
	);
}
