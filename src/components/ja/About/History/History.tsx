import { Fragment } from 'react';
import styles from './History.module.scss';
import HistoryBoxJa from './HistoryBox/HistoryBox';
import {
	afterHistory,
	bootCampHistory,
	secondCompanyHistory,
	firstCompanyHistory,
	schoolHistory,
} from '../../../../variables/variables';

export default function HistoryEn() {
	return (
		<Fragment>
			<div className={styles['history-ja']}>
				<div className={styles['history-title-ja']}>略歴</div>
				<HistoryBoxJa history={afterHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxJa history={bootCampHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxJa history={secondCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxJa history={firstCompanyHistory} />
				<div className={styles['history-boxes-gap-line']}></div>
				<HistoryBoxJa history={schoolHistory} />
			</div>
		</Fragment>
	);
}
