import { Fragment } from 'react';
import HistoryBox from './HistoryBox/HistoryBox';
import './History.scss';
import {
	afterHistory,
	bootCampHistory,
	secondCompanyHistory,
	firstCompanyHistory,
	schoolHistory,
} from '../../../../variables/variables';

export default function History() {
	return (
		<Fragment>
			<div id="history">
				<div className="history-title">Brief History</div>
				<HistoryBox history={afterHistory} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={bootCampHistory} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={secondCompanyHistory} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={firstCompanyHistory} />
				<div className="history-boxes-gap-line"></div>
				<HistoryBox history={schoolHistory} />
			</div>
		</Fragment>
	);
}
