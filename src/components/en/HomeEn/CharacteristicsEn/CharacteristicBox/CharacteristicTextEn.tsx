import { Fragment } from 'react';
import styles from './CharacteristicTextEn.module.scss';

export default function CharacteristicTextEn(props: any) {
	return (
		<Fragment>
			<div className={styles['characteristic-texts-box']}>
				<div className={styles['characteristic-text-keyword']}>{props.keyword}</div>
				<div className={styles['characteristic-text-title']}>{props.title}</div>
				{props.contents.map((content: string[], i: string) => (
					<div className={styles['characteristic-text-content']} key={i}>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}
