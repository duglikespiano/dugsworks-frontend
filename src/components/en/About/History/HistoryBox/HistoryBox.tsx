import { Fragment } from 'react';
import styles from './HistoryBox.module.scss';
import { HistoryPropsType } from '../../../../../variables/types';

export default function HistoryBoxKo(props: HistoryPropsType) {
	return (
		<Fragment>
			<div className={styles['history-box-en']}>
				<div className={styles['history-box-period-en']}>{props.history[0].period}</div>
				<div className={styles['history-box-name-en']}>{props.history[0].name}</div>
				<div className={styles['history-box-department-en']}>{props.history[0].department}</div>
				<div className={styles['history-box-duty-en']}>{props.history[0].duty1}</div>
				<div className={styles['history-box-duty-en']}>{props.history[0].duty2}</div>
				<div className={styles['history-box-duty-en']}>{props.history[0].duty3}</div>
			</div>
		</Fragment>
	);
}
