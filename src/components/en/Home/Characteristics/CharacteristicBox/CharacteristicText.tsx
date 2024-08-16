import { Fragment } from 'react';
import styles from './CharacteristicTextEn.module.scss';
import { CharacteristicTextPropsType } from '../../../../../variables/types';

export default function CharacteristicTextEn(props: CharacteristicTextPropsType) {
	return (
		<Fragment>
			<div className={styles['characteristic-texts-box-en']}>
				<div className={styles['characteristic-text-keyword-en']}>{props.keyword}</div>
				<div className={styles['characteristic-text-title-en']}>{props.title}</div>
				{props.contents.map((content: string, i: number) => (
					<div className={styles['characteristic-text-content-en']} key={i}>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}
