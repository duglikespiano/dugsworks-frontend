import { Fragment } from 'react';
import styles from './HistoryEn.module.scss';
import HistoryBoxEn from './HistoryBoxEn/HistoryBoxEn';
import { afterHistory, bootCampHistory, secondCompanyHistory, firstCompanyHistory, schoolHistory } from '../../../../variables';

export default function HistoryEn() {
	return (
		<Fragment>
			<div className={styles['history-en']}>
				<div className={styles['history-title-en']}>Brief History</div>
				<HistoryBoxEn history={afterHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxEn history={bootCampHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxEn history={secondCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxEn history={firstCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxEn history={schoolHistory} />
			</div>
		</Fragment>
	);
}
