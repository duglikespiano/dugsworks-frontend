import { Fragment } from 'react';
import styles from './CharacteristicText.module.scss';
import { CharacteristicTextPropsType } from '../../../../../variables/types';

export default function CharacteristicTextKo(props: CharacteristicTextPropsType) {
	return (
		<Fragment>
			<div className={styles['characteristic-texts-box-ko']}>
				<div className={styles['characteristic-text-keyword-ko']}>{props.keyword}</div>
				<div className={styles['characteristic-text-title-ko']}>{props.title}</div>
				{props.contents.map((content: string, i: number) => (
					<div className={styles['characteristic-text-content-ko']} key={i}>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}
