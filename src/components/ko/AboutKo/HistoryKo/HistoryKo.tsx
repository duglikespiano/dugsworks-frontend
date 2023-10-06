import { Fragment } from 'react';
import styles from './HistoryKo.module.scss';
import HistoryBoxKo from './HistoryBoxKo/HistoryBoxKo';
import { afterHistory, bootCampHistory, secondCompanyHistory, firstCompanyHistory, schoolHistory } from '../../../../variables';

export default function HistoryKo() {
	return (
		<Fragment>
			<div className={styles['history-ko']}>
				<div className={styles['history-title-ko']}>약력</div>
				<HistoryBoxKo history={afterHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxKo history={bootCampHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxKo history={secondCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxKo history={firstCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxKo history={schoolHistory} />
			</div>
		</Fragment>
	);
}
