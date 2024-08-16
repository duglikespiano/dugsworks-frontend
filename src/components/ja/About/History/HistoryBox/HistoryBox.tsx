import { Fragment } from 'react';
import styles from './HistoryBox.module.scss';
import { HistoryPropsType } from '../../../../../variables/types';

export default function HistoryBoxKo(props: HistoryPropsType) {
	return (
		<Fragment>
			<div className={styles['history-box-ja']}>
				<div className={styles['history-box-period-ja']}>{props.history[2].period}</div>
				<div className={styles['history-box-name-ja']}>{props.history[2].name}</div>
				<div className={styles['history-box-department-ja']}>{props.history[2].department}</div>
				<div className={styles['history-box-duty-ja']}>{props.history[2].duty1}</div>
				<div className={styles['history-box-duty-ja']}>{props.history[2].duty2}</div>
				<div className={styles['history-box-duty-ja']}>{props.history[2].duty3}</div>
			</div>
		</Fragment>
	);
}
