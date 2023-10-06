import { Fragment } from 'react';
import styles from './HistoryBoxKo.module.scss';
import { HistoryPropsType } from '../../../../types/types';

export default function HistoryBoxKo(props: HistoryPropsType) {
	return (
		<Fragment>
			<div className={styles['history-box-ko']}>
				<div className={styles['history-box-period-ko']}>{props.history[1].period}</div>
				<div className={styles['history-box-name-ko']}>{props.history[1].name}</div>
				<div className={styles['history-box-department-ko']}>{props.history[1].department}</div>
				<div className={styles['history-box-duty-ko']}>{props.history[1].duty1}</div>
				<div className={styles['history-box-duty-ko']}>{props.history[1].duty2}</div>
				<div className={styles['history-box-duty-ko']}>{props.history[1].duty3}</div>
			</div>
		</Fragment>
	);
}
