import { Fragment } from 'react';
import styles from './CharacteristicTextJa.module.scss';

interface CharacteristicTextProps {
	keyword: string;
	title: string;
	contents: string[];
}

export default function CharacteristicTextJa(props: CharacteristicTextProps) {
	return (
		<Fragment>
			<div className={styles['characteristic-texts-box-ja']}>
				<div className={styles['characteristic-text-keyword-ja']}>{props.keyword}</div>
				<div className={styles['characteristic-text-title-ja']}>{props.title}</div>
				{props.contents.map((content: string, i: number) => (
					<div className={styles['characteristic-text-content-ja']} key={i}>
						{content}
					</div>
				))}
			</div>
		</Fragment>
	);
}
