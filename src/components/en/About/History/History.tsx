import { Fragment } from 'react';
import HistoryBox from './HistoryBox/HistoryBox';
import styles from './HistoryEn.module.scss';
import { afterHistory, bootCampHistory, secondCompanyHistory, firstCompanyHistory, schoolHistory } from '../../../../variables';

export default function HistoryEn() {
	return (
		<Fragment>
			<div className={styles['history-en']}>
				<div className={styles['history-title-en']}>Brief History</div>
				<HistoryBox history={afterHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBox history={bootCampHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBox history={secondCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBox history={firstCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBox history={schoolHistory} />
			</div>
		</Fragment>
	);
}
